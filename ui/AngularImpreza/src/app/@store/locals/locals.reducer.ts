import { LocalsActions } from './locals.actions';
import { LocalsState } from './locals.state';

export const initState: LocalsState = {

    allLocals: [],

};

export function localsReducer(state: LocalsState = initState, action: LocalsActions.Actions) {

  
    switch (action.type) {
  
      case LocalsActions.Type.BULK_READ_LOCALS_SUCESS:
  
        return {
          ...state,
          allLocals: action.payload.locals,
        };
  
     
  
      default:
        return { ...state };
    }
}
