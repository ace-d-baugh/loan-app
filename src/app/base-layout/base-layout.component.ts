/*
============================================
; Title: base-layout.component.ts
; Author: Ace Baugh
; Date:   February 23, 2023
; Description: This is the base layout component file
============================================
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  assignment: string;
  // This adds the assignment string to the app component
  constructor(private router: Router) {
    this.assignment = 'Loan_App';
  }

}
