
import { Article } from './guests.model';

export interface ArticlesState {

  allArticles: Article[];

  filteredArticles: Article[];

  selectedArticle: Article;
}
