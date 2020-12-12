import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocalComponent } from './local/local.component'
import { GuestComponent } from './guest/guest.component'

const routes: Routes = [
  { path: '',
    redirectTo: '/local',
    pathMatch: 'full'
  },
  {
    path: 'local',
    component: LocalComponent
  },
  {
    path: 'guest',
    component: GuestComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
