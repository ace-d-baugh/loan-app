/*
============================================
; Title: app.component.ts
; Author: Ace Baugh
; Date: February 23, 2023
; Description: This is the app component file
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'loan-app';
}
