import { Injectable } from '@angular/core';
import { Store, select } from 'src/app/@store/guests/node_modules/@ngrx/store';

import { AppState } from '../app-state';
import { EditionsActions } from './locals.actions';
import { EditionsSelectors } from './locals.selectors';


@Injectable({
  providedIn: 'root'
})
export class EditionsStore {
  constructor(private store$: Store<AppState>) {}

  state$ = this.store$.pipe(select(EditionsSelectors.getEditions()));

  bulkReadEditions(): void {
    this.store$.dispatch(new EditionsActions.BulkReadEditions());
  }

  filterEditions(query: string): void {
    this.store$.dispatch(new EditionsActions.FilterEditions({ query }));
  }

  runProgressBar(): void {
    this.store$.dispatch(new EditionsActions.RunProgressBar());
  }

  stopProgressBar(): void {
    this.store$.dispatch(new EditionsActions.StopProgressBar());
  }

  subsetEditions(start: number, end: number): void {
    this.store$.dispatch(new EditionsActions.SubsetEditions({ start, end }));
  }

}
