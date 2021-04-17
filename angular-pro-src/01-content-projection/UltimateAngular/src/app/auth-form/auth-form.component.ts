import {
  Component,
  ViewChild,
  AfterViewInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {User} from './auth-form.interface';
import {AuthRememberComponent} from './auth-remember/auth-remember.component';
import {AuthMessageComponent} from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChildren(AuthRememberComponent) remember?: QueryList<AuthRememberComponent>;
  @ViewChild(AuthMessageComponent, {static: true}) message?: AuthMessageComponent;
  showMessage = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }

    if (this.message) {
      this.message.days = 30;
    }
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
