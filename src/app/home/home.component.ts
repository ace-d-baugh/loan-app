/*
============================================
; Title: home.component.ts
; Author: Ace Baugh
; Date: February 23, 2023
; Description: This is the home component file
============================================
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

}
