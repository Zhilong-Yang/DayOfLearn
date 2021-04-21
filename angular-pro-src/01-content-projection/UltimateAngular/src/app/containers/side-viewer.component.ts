import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FoodService } from '../food.service';
import {HttpClient} from "@angular/common/http";

interface Side {
  name: string,
  price: number
}

@Component({
  selector: 'side-viewer',
  providers: [
    FoodService
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
    this.items$ = this.foodService.getSides();
  }
}