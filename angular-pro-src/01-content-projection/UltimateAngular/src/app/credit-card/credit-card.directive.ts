import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[credit-card]'
})
export class CreditCardDirective {
  constructor(private element: ElementRef) {
    console.log(this.element);
  }
}
