import {Component} from '@angular/core';
import {User} from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UltimateAngular';
  rememberMe = false;

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  createUser(user: User): void {
    console.log('Create account', user);
  }

  loginUser(user: User): void {
    console.log('Login', user, this.rememberMe);
  }
}
