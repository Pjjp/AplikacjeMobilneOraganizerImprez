import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDependenciesModule } from '../@shared-dependencies/shared-dependencies.module';
import { SharedModule } from '../@shared/shared.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedDependenciesModule,
    SharedModule
  ]
})
export class GuestModule { }
