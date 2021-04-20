import { AbstractControl } from '@angular/forms';

export class StockValidators {
  // tslint:disable-next-line:typedef
  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidBranch: true };
  }

  // tslint:disable-next-line:typedef
  static checkStockExists(control: AbstractControl) {
    const stockItem = control.get('stock');
    const selector = control.get('selector');

    if (!(stockItem && selector)) { return null; }

    // @ts-ignore
    const exists = stockItem.value.some((stock) => {
      return stock.product_id === parseInt(selector.value.product_id, 10);
    });

    return exists ? { stockExists: true } : null;

  }
}
