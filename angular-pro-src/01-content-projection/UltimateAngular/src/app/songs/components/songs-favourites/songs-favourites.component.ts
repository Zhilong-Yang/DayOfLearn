import {Component, OnInit} from '@angular/core';
import {Store} from '../../../store';
import {Observable} from 'rxjs/Observable';
import {SongsService} from '../../services/songs.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Song } from '../../services/songs.service';

@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
      <songs-list
        [list]="favourites$ | async"
        (toggle)="onToggle($event)">
        Favourites
      </songs-list>
    </div>
  `
})
export class SongsFavouritesComponent implements OnInit {

  // @ts-ignore
  favourites$: Observable<Song[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    this.favourites$ = this.store.select('playlist')
      .filter(Boolean)
      .map((playlist: Song []) => playlist.filter(track => track.favourite));
  }

  // @ts-ignore
  onToggle(event) {
    this.songsService.toggle(event);
  }
}
