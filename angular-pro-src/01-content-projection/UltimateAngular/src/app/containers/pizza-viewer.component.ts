import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FoodService} from '../food.service';
import {HttpClient} from "@angular/common/http";

interface Pizza {
  name: string,
  price: number
}

// @ts-ignore
export function PizzaFactory(http) {
  return new FoodService(http, '/api/pizzas');
}

@Component({
  selector: 'pizza-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: PizzaFactory,
      deps: [
        HttpClient
      ]
    }
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':'symbol' }}
      </div>
    </div>
  `
})
export class PizzaViewerComponent implements OnInit {
  items$?: Observable<Pizza[]>;

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {
    this.items$ = this.foodService.getFood("pizzas");
  }
}
