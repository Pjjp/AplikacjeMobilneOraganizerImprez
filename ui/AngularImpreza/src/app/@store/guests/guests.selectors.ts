import { createSelector } from 'src/app/@store/locals/node_modules/@ngrx/store';

import { AppState } from '../app-state';
import { ArticlesState } from './guests.state';

export namespace ArticlesSelectors {
  export const articles = (state: AppState) => state.articles;

  export function getEditions() {
    return createSelector(
      articles,
      (state: ArticlesState) => state
    );
  }
}
