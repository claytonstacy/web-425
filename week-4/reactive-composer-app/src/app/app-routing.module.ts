/*
============================================
Title: 4.3 - Handling Events with Observables
Author: Clayton Stacy
Date: 1 August 2020
Modified by: Clayton Stacy
Description: Demonstrate Angular Routing and Data Binding
============================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ComposerListComponent},
  {path: 'composer-details/:composerId', component: ComposerDetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
