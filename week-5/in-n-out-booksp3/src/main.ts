/*
============================================
Title: 5.4 - Dialogs
Author: Clayton Stacy
Date: 9 August 2020
Modified by: Clayton Stacy
Description: Continue Angular Demonstration with Dialogs
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
