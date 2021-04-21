import {Component} from '@angular/core';
import {FoodStoreService} from './food-store/food-store.service';
import {StoreJson} from "./food-store/config";

@Component({
  selector: 'app-root',
  template: `
    <div>
<!--      {{store | async| json}}-->
      Food Store ({{ (store | async)?.name }})
    </div>
  `
})
export class AppComponent {
  // @ts-ignore
  store = this.foodService.getStore();

  constructor(private foodService: FoodStoreService) {
  }
}
