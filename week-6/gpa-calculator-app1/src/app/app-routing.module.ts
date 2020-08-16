/*
============================================
Title: 6.3- Layouts
Author: Clayton Stacy
Date: 16 August 2020
Modified by: Clayton Stacy
Description: Demonstrate layouts and routing
============================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

const routes: Routes = [
  {path: '', component: BaseLayoutComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    }
  ]
},
{
  path: 'session',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'not-found',
      component: NotFoundComponent
    }
  ]
},
{
  path: '**',
  redirectTo: 'session/not-found'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
