import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDependenciesModule } from '../@shared-dependencies/shared-dependencies.module';
import { SharedModule } from '../@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedDependenciesModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class GuestModule { }
