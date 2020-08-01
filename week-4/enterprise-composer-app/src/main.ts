/*
============================================
Title: 4.4 Async Pipe
Author: Clayton Stacy
Date: 1 August 2020
Modified by: Clayton Stacy
Description: Demonstrate reactive programming using pipe, map and filter function
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
