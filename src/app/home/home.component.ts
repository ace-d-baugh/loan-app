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
  loanForm: FormGroup = new FormGroup({});

  // Variables
  principal: number = 0;
  interestRate: number = 0;
  years: number = 0;
  ratePerPeriod: number = 0;
  numberOfPayments: number = 0;
  monthlyPayment: number = 0;
  totalPayment: number = 0;
  totalInterest: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      // Principal number which must be a number 1 or more
      principal: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$'),
          Validators.minLength(1),
        ]),
      ],
      // Interest rate number which must be a decimal .01 or more and may use a decimal
      interestRate: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(0.01),
          Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$'),
          Validators.minLength(1),
        ]),
      ],
      // Years number which must be a number 1 to 100
      years: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$'),
          Validators.minLength(1),
          Validators.max(100),
        ]),
      ],
    });
  }

  // Get the form controls
  get form() {
    return this.loanForm.controls;
  }

  // Calculate the loan
  calculateLoan() {
    this.principal = (this.form as any).principal.value;
    this.interestRate = (this.form as any).interestRate.value;
    this.years = (this.form as any).years.value;
    this.ratePerPeriod = this.interestRate / 100 / 12;
    this.numberOfPayments = this.years * 12;

    // Calculate the monthly payment
    this.monthlyPayment =
      (this.principal *
        (this.ratePerPeriod *
          Math.pow(1 + this.ratePerPeriod, this.numberOfPayments))) /
      (Math.pow(1 + this.ratePerPeriod, this.numberOfPayments) - 1);

    // Calculate the total payment
    this.totalPayment = this.monthlyPayment * this.years * 12;

    // Calculate the total interest
    this.totalInterest = this.totalPayment - this.principal;
  }
}
