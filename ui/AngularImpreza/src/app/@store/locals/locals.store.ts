import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../app-state';
import { LocalsActions } from './locals.actions';
import { LocalsSelectors } from './locals.selectors';


@Injectable({
  providedIn: 'root'
})
export class LocalsStore {
  constructor(private store$: Store<AppState>) {}

  state$ = this.store$.pipe(select(LocalsSelectors.getLocals()));

  bulkReadLocals(): void {
    this.store$.dispatch(new LocalsActions.BULK_READ_LOCALS);
  }

}
