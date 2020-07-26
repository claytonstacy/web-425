/*
============================================
Title: 3.4 Guarding Routes
Author: Clayton Stacy
Date: 26 July 2020
Modified by: Clayton Stacy
Description: Build a canActivate Route
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
