import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import {FormsModule} from '@angular/forms';
import { AuthRememberComponent } from './auth-form/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
