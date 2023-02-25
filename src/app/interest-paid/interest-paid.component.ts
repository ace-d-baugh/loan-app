import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest-paid',
  templateUrl: './interest-paid.component.html',
  styleUrls: ['./interest-paid.component.scss']
})
export class InterestPaidComponent {
  @Input() totalInterest: number = 0;

  constructor() { }
}
