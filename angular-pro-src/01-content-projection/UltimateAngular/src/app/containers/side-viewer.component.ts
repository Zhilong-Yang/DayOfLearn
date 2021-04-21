import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FoodService } from '../food.service';
import {HttpClient} from "@angular/common/http";

interface Side {
  name: string,
  price: number
}

// @ts-ignore
export function SideFactory(http) {
  return new FoodService(http, '/api/sides');
}

@Component({
  selector: 'side-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: SideFactory,
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
export class SideViewerComponent implements OnInit {
  items$?: Observable<Side[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood("sides");
  }
}
