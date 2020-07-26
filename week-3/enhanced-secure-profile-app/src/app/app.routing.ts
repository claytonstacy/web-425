/*
============================================
Title: 3.4 Guarding Routes
Author: Clayton Stacy
Date: 26 July 2020
Modified by: Clayton Stacy
Description: Build a canActivate Route
============================================
*/

import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent, canActivate: [SignInGuard]}
];
