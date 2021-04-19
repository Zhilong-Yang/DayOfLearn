import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'app-stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
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

  // @ts-ignore
  private onTouch: Function;
  // @ts-ignore
  private onModelChange: Function;

  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;

  // @ts-ignore
  // tslint:disable-next-line:typedef
  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  writeValue(value: number): void {
    this.value = value || 0;
  }

  increment(): void {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      // @ts-ignore
      this.onModelChange(this.value);
    }
  }

  decrement(): void {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      // @ts-ignore
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}
