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
      <button (click)="moveComponent()">
        Move
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
    // @ts-ignore
    this.entry.createComponent(authFormFactory);
    this.component = this.entry?.createComponent(authFormFactory, 0);
    // @ts-ignore
    this.component.instance.title = 'Create account';
    this.component?.instance.submitted.subscribe(this.loginUser);
    this.cdr.detectChanges();
  }

  destroyComponent(): void {
    // @ts-ignore
    this.component.destroy();
  }

  moveComponent(): void {
    // @ts-ignore
    // tslint:disable-next-line:no-non-null-assertion
    this.entry.move(this.component!.hostView, 1);
  }

  loginUser(user: User): void {
    console.log('Login', user);
  }

}
