import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';

import {FOOD_STORE_CONFIG, FoodStoreConfig, StoreJson} from './config';
import {map} from "rxjs/operators";

@Injectable()
export class FoodStoreService {
  constructor(
    private http: HttpClient,
    @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig
  ) {}

  getStore() {
    const header = new HttpHeaders()
      .set('id', this.config.storeId + "")
      .set('token', this.config.storeToken);
    const options =  ({
      headers: header
    });

    return this.http.get<StoreJson>(`/assets/store.json`, options)
      .pipe(
        map((res:any) =>
        {
          return res.stores[0];
        })
      );
  }
}
