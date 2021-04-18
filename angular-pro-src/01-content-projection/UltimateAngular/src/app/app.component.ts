import {
  Component,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
  TemplateRef,
  ChangeDetectorRef
} from '@angular/core';

import {AuthFormComponent} from './auth-form/auth-form.component';

import {User} from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <ng-template #tmpl>
        Todd Motto : England, UK
      </ng-template>
    </div>
  `
})
export class AppComponent implements AfterViewInit {

  // @ts-ignore
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;
  // @ts-ignore
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.entry.createEmbeddedView(this.tmpl);
    this.cdr.detectChanges();
  }
}
