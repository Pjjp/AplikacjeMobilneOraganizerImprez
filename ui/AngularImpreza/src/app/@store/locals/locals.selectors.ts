import { createSelector } from 'src/app/@store/guests/node_modules/@ngrx/store';

import { AppState } from '../app-state';
import { EditionsState } from './locals.state';

export namespace EditionsSelectors {
  export const editions = (state: AppState) => state.editions;

  export function getEditions() {
    return createSelector(
      editions,
      (state: EditionsState) => state
    );
  }
}
