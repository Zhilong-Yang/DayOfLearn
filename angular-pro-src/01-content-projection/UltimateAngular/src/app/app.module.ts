import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MailModule} from './mail/mail.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

export const ROUTES: Routes = [
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
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
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
