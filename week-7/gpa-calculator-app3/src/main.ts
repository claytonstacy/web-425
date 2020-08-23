/*
============================================
Title: 7.2- Reactive Forms
Author: Clayton Stacy
Date: 23 August 2020
Modified by: Clayton Stacy
Description: Build and process reactive forms
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
