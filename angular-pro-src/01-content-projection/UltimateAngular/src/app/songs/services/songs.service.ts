import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '../../store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {map} from 'rxjs/operators';

export interface Song {
  id :number;
  artist: string;
  track: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable()
export class SongsService {

  getPlaylist$ : Observable<Song[]>= this.http
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
  toggle(event: any) {
    console.log(event);
  }
}
