import {Component, OnDestroy, OnInit} from '@angular/core';

import {Store} from '../../../store';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs';
import {SongsService} from '../../services/songs.service';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <div *ngFor="let item of playlist$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  // @ts-ignore
  playlist$: Observable<any[]>;
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

}
