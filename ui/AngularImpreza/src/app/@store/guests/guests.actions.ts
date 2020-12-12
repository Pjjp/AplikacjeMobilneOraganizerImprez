import { Action } from 'src/app/@store/locals/node_modules/@ngrx/store';

import { Article } from './guests.model';

export namespace ArticlesActions {
  export enum Type {
    BULK_READ_ARTICLES = '[ARTICLES] Bulk Read Articles',
  }

  export class BulkReadArticles implements Action {
    readonly type = Type.BULK_READ_ARTICLES;

    constructor(public payload: { articles: Article[] }) {}
  }

  export type Actions =
    | BulkReadArticles;
}
