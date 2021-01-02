import { createSelector } from '@ngrx/store';

import { AppState } from '../app-state';
import { LocalsState } from './locals.state';

export namespace LocalsSelectors {
  export const locals = (state: AppState) => state.locals;

  export function getLocals() {
    return createSelector(
      locals,
      (state: LocalsState) => state
    );
  }
}
