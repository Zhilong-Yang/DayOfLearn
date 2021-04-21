import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import {Mail} from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      <h2>{{ (message | async)!.from }}</h2>
      <p>{{ (message | async)!.full }}</p>
    </div>
    <div class="mail-reply">
      <textarea
        (change)="updateReply($event)"
        placeholder="Type your reply..."
        [value]="reply">
      </textarea>
      <button type="button" (click)="sendReply()">
        Send
      </button>
    </div>
  `
})
export class MailViewComponent implements OnInit {
  reply = '';
  message: Observable<Mail> = this.route.data.pluck('message');

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.reply = '';
    });
  }

  // @ts-ignore
  updateReply(event) {
    this.reply = event.target.value;
  }

  sendReply() {
    console.log('Sent!', this.reply);
  }
}
