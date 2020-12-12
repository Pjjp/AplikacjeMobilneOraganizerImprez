
import { EditionsState } from './editions/editions.state';
import { ArticlesState } from './guests/guests.state';

export interface AppState {
  readonly editions: EditionsState;
  readonly articles: ArticlesState;
}
