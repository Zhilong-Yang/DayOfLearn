import {
  Component,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
  ComponentFactoryResolver, ChangeDetectorRef
} from '@angular/core';

import {AuthFormComponent} from './auth-form/auth-form.component';

import {User} from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterViewInit {

  @ViewChild('entry', {read: ViewContainerRef}) entry?: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry?.createComponent(authFormFactory);
    console.log(component?.instance);
    this.cdr.detectChanges();
  }

  loginUser(user: User): void {
    console.log('Login', user);
  }

}
