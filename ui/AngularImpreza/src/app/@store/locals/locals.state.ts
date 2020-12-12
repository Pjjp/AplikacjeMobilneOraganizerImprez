
import { Edition } from './locals.model';

export interface EditionsState {

  allEditions: Edition[];
  
  filteredEditions: Edition[];

  selectedEdition: Edition;

  setProgressBar: boolean;
}
