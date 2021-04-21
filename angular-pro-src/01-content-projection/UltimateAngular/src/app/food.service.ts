import {Injectable, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/internal/operators/map';

@Injectable()
export class FoodService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getSides(): Observable<any[]> {
    return this.http.get('/assets/food.json')
      .pipe(
        map((res: any) => {
          return res['sides'];
        }));
  }
  getPizzas(): Observable<any[]> {
    return this.http.get('/assets/food.json')
      .pipe(
        map((res: any) => {
          return res['pizzas'];
        }));
  }
  getDrinks(): Observable<any[]> {
    return this.http.get('/assets/food.json')
      .pipe(
        map((res: any) => {
          return res['drinks'];
        }));
  }
}
