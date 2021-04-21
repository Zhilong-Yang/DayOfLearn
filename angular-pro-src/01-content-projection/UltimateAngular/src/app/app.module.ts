import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {MailModule} from './mail/mail.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import "rxjs-compat/add/observable/of";
import {AuthModule} from "./auth/auth.module";
import {AuthGuard} from "./auth/auth.guard";

export const ROUTES: Routes = [
  {path: 'dashboard', canLoad: [AuthGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: '**', redirectTo: 'mail/folder/inbox'}
];

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
