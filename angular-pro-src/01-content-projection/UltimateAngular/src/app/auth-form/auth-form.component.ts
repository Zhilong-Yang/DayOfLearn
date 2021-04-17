import {
  Component,
  ViewChildren,
  AfterViewInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  EventEmitter,
  OnInit,
  Output, ChangeDetectorRef, ViewChild, ElementRef
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

  showMessage = false;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChildren(AuthRememberComponent) remember?: QueryList<AuthRememberComponent>;
  @ViewChildren(AuthMessageComponent) message?: QueryList<AuthMessageComponent>;
  @ViewChild('email') email?: ElementRef;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.email) {
      this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
      this.email.nativeElement.classList.add('email');
      this.email.nativeElement.focus();
    }

    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });
      this.cd.detectChanges();
    }
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
