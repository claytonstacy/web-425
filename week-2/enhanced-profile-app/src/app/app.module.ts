/*
============================================
Title: 2.3 Data Binding
Author: Professor Krasso
Date: 13 July 2020
Modified by: Clayton Stacy
Description: Demonstrate Angular data binding
============================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyImageComponent } from './my-image/my-image.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    MyImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
