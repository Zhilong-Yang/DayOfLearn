import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Product, Item} from '../models/product.interface';
import {Observable} from 'rxjs';

@Injectable()
export class StockInventoryService {
  constructor(
    private http: HttpClient
  ) {
  }

  getCartItems(): Observable<Item[]> {
    // @ts-ignore
    return this.http
      .get<Item[]>('/assets/cart.json')
      .map((response: Response) => response)
      .catch((error: any) => Observable.throw(error.json()));
  }

  getProducts(): Observable<Product[]> {
    // @ts-ignore
    return this.http
      .get<Product[]>('/assets/product.json')
      .map((response: Response) => response)
      .catch((error: any) => Observable.throw(error.json()));
  }

  checkBranchId(id: string): Observable<boolean> {
    // @ts-ignore
    return this.http
      .get<string[]>('/assets/branch.json')
      .map((response: Response) => response)
      .map((response: string[]) => {
        console.log(response.includes(id));
        // tslint:disable-next-line:no-unused-expression
        response.includes(id);
      })
      .catch((error: any) => Observable.throw(error.json()));
  }
}
