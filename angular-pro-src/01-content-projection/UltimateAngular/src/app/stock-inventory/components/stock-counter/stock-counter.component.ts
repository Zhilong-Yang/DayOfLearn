import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stock-counter',
  styleUrls: ['stock-counter.component.scss'],
  template: `
    <div class="stock-counter">
      <div>
        <div>
          <p>{{ value }}</p>
          <div>
            <button
              type="button"
              (click)="increment()"
              [disabled]="value === max">
              +
            </button>
            <button
              type="button"
              (click)="decrement()"
              [disabled]="value === min">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StockCounterComponent {

  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;

  writeValue(value: number): void {
    this.value = value || 0;
  }

  increment(): void {
    if (this.value < this.max) {
      this.value = this.value + this.step;
    }
  }

  decrement(): void {
    if (this.value > this.min) {
      this.value = this.value - this.step;
    }
  }
}
