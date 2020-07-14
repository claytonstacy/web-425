/*
============================================
Title: 2.5 Navigation
Author: Professor Krasso
Date: 13 July 2020
Modified by: Clayton Stacy
Description: Demonstrate basic navigation
============================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
