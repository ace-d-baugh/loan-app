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
      principal: [null, Validators.compose([Validators.required])],
      interestRate: [null, Validators.compose([Validators.required])],
      years: [null, Validators.compose([Validators.required])],
    });
  }



  get form() {
    return this.loanForm.controls;
  }

  calculateLoan() {
    this.principal = (this.form as any).principal.value;
    this.interestRate = (this.form as any).interestRate.value;
    this.years = (this.form as any).years.value;
    this.ratePerPeriod = this.interestRate / 100 / 12;
    this.numberOfPayments = this.years * 12;

    this.monthlyPayment = this.principal * (this.ratePerPeriod * Math.pow((1 + this.ratePerPeriod), this.numberOfPayments)) / (Math.pow((1 + this.ratePerPeriod), this.numberOfPayments) - 1);

    this.totalPayment = this.monthlyPayment * this.years * 12;

    this.totalInterest = this.totalPayment - this.principal;
  }
}
