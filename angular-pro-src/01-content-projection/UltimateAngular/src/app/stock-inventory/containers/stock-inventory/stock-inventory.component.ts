import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

import {Product, Item} from '../../models/product.interface';
import {StockInventoryService} from '../../services/stock-inventory.service';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/forkJoin';

@Component({
  selector: 'app-stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <app-stock-branch
          [parent]="form">
        </app-stock-branch>

        <app-stock-selector
          [parent]="form"
          [products]="products"
          (added)="addStock($event)">
        </app-stock-selector>

        <app-stock-products
          [parent]="form"
          [map]="productMap"
          (removed)="removeStock($event)">
          >
        </app-stock-products>

        <div class="stock-inventory__price">
          Total: {{ total | currency:'USD':'symbol' }}
        </div>

        <div class="stock-inventory__buttons">
          <button
            type="submit"
            [disabled]="form.invalid">
            Order stock
          </button>
        </div>

        <pre>{{ form.value | json }}</pre>

      </form>
    </div>
  `
})
export class StockInventoryComponent implements OnInit {

  products!: Product[];
  productMap!: Map<number, Product>;

  total = 0;

  form = this.fb.group({
    store: this.fb.group({
      branch: ['', Validators.required],
      code: ['', Validators.required]
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ) {
  }

  ngOnInit(): void {
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    Observable
      .forkJoin(cart, products)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(([cart, products]: [Item[], Product[]]) => {

        const myMap = products
          .map<[number, Product]>(product => [product.id, product]);

        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach(item => this.addStock(item));

        // @ts-ignore
        this.calculateTotal(this.form.get('stock').value);
        // @ts-ignore
        this.form.get('stock')
          .valueChanges.subscribe(value => this.calculateTotal(value));
      });
  }

  calculateTotal(value: Item[]): void {
    const total = value.reduce((prev, next) => {
      // @ts-ignore
      return prev + (next.quantity * this.productMap.get(next.product_id).price);
    }, 0);
    this.total = total;
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  // @ts-ignore
  addStock(stock): void {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({group, index}: { group: FormGroup, index: number }): void {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit(): void {
    console.log('Submit:', this.form.value);
  }
}
