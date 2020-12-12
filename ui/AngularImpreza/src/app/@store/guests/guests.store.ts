import { Injectable } from '@angular/core';
import { Store, select } from 'src/app/@store/locals/node_modules/@ngrx/store';

import { AppState } from '../app-state';
import { ArticlesActions } from './guests.actions';
import { ArticlesSelectors } from './guests.selectors';
import { ArticlesState } from './guests.state';
import { Article } from './guests.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesStore {
  constructor(private store$: Store<AppState>) {}

  state$ = this.store$.pipe(select(ArticlesSelectors.getEditions()));

  bulkReadArticles(articles: Article[]): void {
    this.store$.dispatch(new ArticlesActions.BulkReadArticles({ articles }));
  }

}
