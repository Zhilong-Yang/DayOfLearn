import {Component, OnDestroy, OnInit} from '@angular/core';

import {Store} from '../../../store';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs';
import {SongsService} from '../../services/songs.service';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <songs-list
        [list]="playlist$ | async"
        (toggle)="onToggle($event)">
        Playlist
      </songs-list>
    </div>
  `
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  // @ts-ignore
  playlist$: Observable<Song[]>;
  // @ts-ignore
  subscription: Subscription;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {
  }

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // @ts-ignore
  onToggle(event) {
    this.songsService.toggle(event);
  }
}
