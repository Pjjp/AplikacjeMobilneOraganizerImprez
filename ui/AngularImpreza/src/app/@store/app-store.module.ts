import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { localsReducer } from './locals/locals.reducer';
import { LocalsEffects } from './locals/locals.effects';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      locals: localsReducer,
    }),
    EffectsModule.forRoot([
      LocalsEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })
  ]
})
export class AppStoreModule { }
