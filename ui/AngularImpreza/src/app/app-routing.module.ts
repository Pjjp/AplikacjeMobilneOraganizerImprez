import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocalComponent } from './local/local.component'
import { GuestComponent } from './guest/guest.component'
import { AuthService } from './auth.service'

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
    path: 'login', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
