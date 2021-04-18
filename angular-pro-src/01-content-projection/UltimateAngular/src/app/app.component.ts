import {
  Component,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  ComponentRef
} from '@angular/core';

import {AuthFormComponent} from './auth-form/auth-form.component';

import {User} from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="destroyComponent()">
        Destroy
      </button>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterViewInit {

  @ViewChild('entry', {read: ViewContainerRef}) entry?: ViewContainerRef;
  component?: ComponentRef<AuthFormComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry?.createComponent(authFormFactory);
    // @ts-ignore
    this.component.instance.title = 'Create account';
    this.component?.instance.submitted.subscribe(this.loginUser);
    this.cdr.detectChanges();
  }

  destroyComponent(): void {
    // @ts-ignore
    this.component.destroy();
  }

  loginUser(user: User): void {
    console.log('Login', user);
  }

}
