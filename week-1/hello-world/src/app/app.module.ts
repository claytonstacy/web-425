/*
============================================
Title: 1.3 Angular CLI
Author: Professor Krasso
Date: 6 July 2020
Modified by: Clayton Stacy
Description: Create an Angular app and demonstrate
simple data binding
============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
