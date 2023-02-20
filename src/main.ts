/*
============================================
; Title: main.ts
; Author: Ace Baugh
; Date: February 23, 2023
; Description: This is the main.ts file
============================================
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
