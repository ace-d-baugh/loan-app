import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.scss']
})
export class MonthlyPaymentComponent {
  @Input() monthlyPayment: number = 0;

  constructor() { }
}
