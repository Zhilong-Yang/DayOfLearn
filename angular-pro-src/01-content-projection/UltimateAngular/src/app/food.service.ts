import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/internal/operators/map';

@Injectable()
export class FoodService {
  constructor(
    private http: HttpClient,
    private api: string
  ) {
    console.log(this.api);
  }

  getFood(category: string): Observable<any[]> {

    // @ts-ignore
    return this.http
      .get('/assets/food.json')
      .pipe(
        map((res: any) => {
          return res[category];
        }));
  }
}
