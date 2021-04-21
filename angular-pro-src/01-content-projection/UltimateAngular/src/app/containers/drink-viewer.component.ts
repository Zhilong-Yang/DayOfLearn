import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FoodService} from '../food.service';
import {HttpClient} from "@angular/common/http";

interface Drink {
  name: string,
  price: number
}

// @ts-ignore
export function DrinkFactory(http) {
  return new FoodService(http, '/api/drinks');
}

@Component({
  selector: 'drink-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: DrinkFactory,
      deps: [
        HttpClient
      ]
    }
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>
  `
})

export class DrinkViewerComponent implements OnInit {
  items$?: Observable<Drink[]>;

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {
    console.log(this.foodService.getFood("drinks"));
    this.items$ = this.foodService.getFood("drinks");
  }
}
