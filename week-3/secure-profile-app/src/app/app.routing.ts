/*
============================================
Title: 3.3 Passing Data to Routes, Part 2
Author: Clayton Stacy
Date: 21 July 2020
Modified by: Clayton Stacy
Description: Routing
============================================
*/
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent}
];
