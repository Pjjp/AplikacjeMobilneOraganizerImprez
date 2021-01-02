import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedDependenciesModule } from '../@shared-dependencies/shared-dependencies.module';
import { NavigationComponent } from './navigation/navigation.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedDependenciesModule,
  ],
  declarations: [
    NavigationComponent,
  ],
  exports: [
    NavigationComponent,
  ]
})
export class SharedModule { }
