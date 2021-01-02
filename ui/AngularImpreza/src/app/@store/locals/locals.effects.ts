import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, filter, tap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '../app-state';
import { LocalsActions } from './locals.actions';
import { Local } from './locals.model';
import { LocalsStore } from './';

import { RestApiService } from 'src/app/rest-api.service'


@Injectable()
export class LocalsEffects {
  @Effect()
  ON_BULK_READ_LOCALSS$: Observable<Action> = this.actions$.pipe(
    ofType<LocalsActions.BULK_READ_LOCALS>(LocalsActions.Type.BULK_READ_LOCALS),
    switchMap(action => {
      return this.apiService.getLocationList().pipe(
        // tap(locals => {
        //   this.localsStore.runProgressBar();
        //   console.log('pokaż progress bar');
        // }),console.log('oninit bulk read');
        tap(locals => {
            console.log('efects bulk read');
          }),
        map((locals: Local[]) => new LocalsActions.BULK_READ_LOCALS_SUCESS({ locals })),
        catchError(err => {
          return of(new LocalsActions.BULK_READ_LOCALS_ERROR());
        })
      );
    })
  );

  // syntax to change
  ON_BULK_READ_LOCALSS_SUCESS$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LocalsActions.BULK_READ_LOCALS_SUCESS>(LocalsActions.Type.BULK_READ_LOCALS_SUCESS),
      tap(action => {
        // this.localsStore.stopProgressBar();
      })
    ), { dispatch: false });
 
    // BULK_READ_LOCALSS_SUCESS$ = createEffect(() =>
    // this.actions$.pipe(
    //   ofType<LocalsActions.BULK_READ_LOCALS_SUCESS>(LocalsActions.Type.BULK_READ_LOCALS_SUCESS),
    //   tap(action => {
    //     this.store.bulkReadLocals();
    //   })
    // ), { dispatch: false });
    

  constructor(
    private actions$: Actions,
    private localsStore: LocalsStore,
    private store$: Store<AppState>,
    private store: LocalsStore,
    private apiService: RestApiService,
  ) {}

}
