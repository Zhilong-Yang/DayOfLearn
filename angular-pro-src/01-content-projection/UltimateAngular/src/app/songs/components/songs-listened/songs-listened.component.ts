import {Component, OnInit} from '@angular/core';

import { Store } from '../../../store';
import {Observable} from 'rxjs/Observable';
import {SongsService} from '../../services/songs.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { ItemOfSong } from 'src/app/song.item';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <div *ngFor="let item of listened$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `
})
export class SongsListenedComponent implements OnInit{

  // @ts-ignore
  listened$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    // @ts-ignore
    this.listened$ = this.store.select('playlist')
      .filter(Boolean)
      .map((playlist : ItemOfSong []) => playlist.filter(track => track.listened));
  }

}
