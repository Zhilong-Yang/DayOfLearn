import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Store} from '../../store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {map} from 'rxjs/operators';

@Injectable()
export class SongsService {

  getPlaylist$ = this.http
    .get('/assets/playlist.json')
    .pipe(
      map((res: any) => {
        console.log(res['playlist']);
        return res['playlist'];
      }))
    .do(next => this.store.set('playlist', next));

  constructor(
    private http: HttpClient,
    private store: Store
  ) {
  }

}
