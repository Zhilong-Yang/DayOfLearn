import {Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myFor][myForOf]'
})
export class MyForDirective {

  // @ts-ignore
  @Input()
  set myForOf(collection: any[]) {
    this.view.clear();
    // @ts-ignore
    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
  }

}
