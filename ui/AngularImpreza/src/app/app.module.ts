import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { ShowLocalComponent } from './local/show-local/show-local.component';
import { AddEditLocalComponent } from './local/add-edit-local/add-edit-local.component';
import { GuestComponent } from './guest/guest.component';
import { ShowGuestComponent } from './guest/show-guest/show-guest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutes } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedDependenciesModule } from './@shared-dependencies/shared-dependencies.module';
import { SharedModule } from './@shared/shared.module';
import { LocalModule } from './local/local.module'

import { AppStoreModule } from './@store';


@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    ShowLocalComponent,
    AddEditLocalComponent,
    GuestComponent,
    ShowGuestComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    SharedDependenciesModule,
    BrowserAnimationsModule,
    SharedModule,
    AppStoreModule,
    LocalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
