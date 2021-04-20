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
    <div
      class="stock-counter"
      [class.focused]="focus">
      <div>
        <div
          tabindex="0"
          (keydown)="onKeyDown($event)"
          (blur)="onBlur($event)"
          (focus)="onFocus($event)"
        >
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
export class StockCounterComponent implements ControlValueAccessor {

  // @ts-ignore
  // tslint:disable-next-line:ban-types
  private onTouch: Function;
  // @ts-ignore
  // tslint:disable-next-line:ban-types
  private onModelChange: Function;

  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;
  focus = false;

  // tslint:disable-next-line:typedef
  onKeyDown(event: KeyboardEvent) {

    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    };

    // @ts-ignore
    if (handlers[event.code]) {
      // @ts-ignore
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }

  // tslint:disable-next-line:typedef
  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  // tslint:disable-next-line:typedef
  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

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
