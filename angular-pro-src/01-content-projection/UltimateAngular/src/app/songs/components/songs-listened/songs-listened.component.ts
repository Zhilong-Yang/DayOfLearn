import {Component, OnInit} from '@angular/core';

import { Store } from '../../../store';
import {Observable} from 'rxjs/Observable';
import {SongsService} from '../../services/songs.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Song } from '../../services/songs.service';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <songs-list
        [list]="listened$ | async"
        (toggle)="onToggle($event)">
        Played
      </songs-list>
    </div>
  `
})
export class SongsListenedComponent implements OnInit{

  // @ts-ignore
  listened$: Observable<Song[] >;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    // @ts-ignore
    this.listened$ = this.store.select('playlist')
      .filter(Boolean)
      .map((playlist : Song []) => playlist.filter(track => track.listened));
  }

  // @ts-ignore
  onToggle(event) {
    this.songsService.toggle(event);
  }
}
