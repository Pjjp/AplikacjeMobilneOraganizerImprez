import { NgModule } from '@angular/core';
import { StoreModule } from 'src/app/@store/locals/node_modules/src/app/@store/guests/node_modules/@ngrx/store';
import { EffectsModule } from 'src/app/@store/locals/node_modules/@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { editionsReducer } from './editions/editions.reducer';
import { articlesReducer } from './guests/guests.reducer';
import { EditionsEffects } from './editions/editions.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      editions: editionsReducer,
      articles: articlesReducer,
    }),
    EffectsModule.forRoot([
      EditionsEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })
  ]
})
export class AppStoreModule {}
