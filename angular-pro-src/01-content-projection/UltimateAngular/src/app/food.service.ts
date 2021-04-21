import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/internal/operators/map';
import {API_TOKEN} from "./token";

@Injectable()
export class FoodService {
  constructor(
    private http: HttpClient,
    @Inject(API_TOKEN) private api: string
  ) {}

  getFood(category : string): Observable<any[]> {
    // @ts-ignore
    return this.http
      .get(this.api)
      .pipe(
        map((res: any) => {
          return res[category];
        }));
  }
}
