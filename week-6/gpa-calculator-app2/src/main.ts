/*
============================================
Title: 6.4- Input Properties
Author: Clayton Stacy
Date: 16 August 2020
Modified by: Clayton Stacy
Description: Demonstrate how to pass data between components
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
