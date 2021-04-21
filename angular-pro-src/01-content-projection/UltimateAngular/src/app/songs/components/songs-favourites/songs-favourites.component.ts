import {Component, OnInit} from '@angular/core';
import {Store} from '../../../store';
import {Observable} from 'rxjs/Observable';
import {SongsService} from '../../services/songs.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {ItemOfSong} from '../../../song.item';

@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
      <div *ngFor="let item of favourites$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `
})
export class SongsFavouritesComponent implements OnInit {

  // @ts-ignore
  favourites$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    this.favourites$ = this.store.select('playlist')
      .filter(Boolean)
      .map((playlist: ItemOfSong []) => playlist.filter(track => track.favourite));

  }
}
