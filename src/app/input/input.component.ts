import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  initialAmount: any = '';
  monthlyContribution: any= '';
  interestRate: any = '';
  years: any= '';
  totalSavings: any = '';

  calculateSavings() {
    this.totalSavings = this.initialAmount;
    for (let i = 0; i < this.years; i++) {
        for (let j = 0; j < 12; j++) {
            this.totalSavings += this.monthlyContribution;
            this.totalSavings += this.totalSavings * (this.interestRate / 12);
        }
    }
  }
}

  