import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Mail} from './models/mail.interface';
import {map} from 'rxjs/operators';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {
  }

  getFolder(folder: string): Observable<Mail[]> {
    return this.http
      .get(`/assets/${folder}.json`)
      .pipe(
        map((res: any) => {
          return res['messages'];
        }));
  }

  getMessage(id: string): Observable<Mail> {
    return this.http
      .get("/assets/messages.json")
      .pipe(
        map((res: any) => {
          return res['messages'][parseInt(id) - 1];
        }));
  }
}
