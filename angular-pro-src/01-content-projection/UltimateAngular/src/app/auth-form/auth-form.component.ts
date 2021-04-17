import {Component, ContentChild, AfterContentInit, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from './auth-form.interface';
import {AuthRememberComponent} from './auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, AfterContentInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  showMessage = false;
  @ContentChild(AuthRememberComponent) remember?: AuthRememberComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) =>
        this.showMessage = checked);
    }
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
