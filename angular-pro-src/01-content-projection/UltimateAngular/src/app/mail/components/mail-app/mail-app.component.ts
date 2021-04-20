import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)">
      </router-outlet>
    </div>
  `
})
export class MailAppComponent {
  // @ts-ignore
  onActivate(event) {
    console.log('Activate:', event);
  }
  // @ts-ignore
  onDeactivate(event) {
    console.log('Deactivate:', event);
  }
}
