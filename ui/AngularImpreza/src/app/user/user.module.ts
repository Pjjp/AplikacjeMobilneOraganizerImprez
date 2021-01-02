import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedDependenciesModule } from '../@shared-dependencies/shared-dependencies.module';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EmailLoginComponent } from './email-login/email-login.component';
import { AgespanComponent } from './agespan/agespan.component';


@NgModule({
  declarations: [LoginComponent, EmailLoginComponent, AgespanComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedDependenciesModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
