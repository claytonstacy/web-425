/*
============================================
Title: 6.3- Layouts
Author: Clayton Stacy
Date: 16 August 2020
Modified by: Clayton Stacy
Description: Demonstrate layouts and routing
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
