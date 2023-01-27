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
  storedUsername: string = 'username';

  calculateSavings() {
    let savingsByYear = [5, 10, 15, 20, 25, 30];

    for (let year of savingsByYear) {
      this.totalSavings = this.initialAmount;
      this.years = year;

      for (let i = 0; i < this.years; i++) {
        for (let j = 0; j < 12; j++) {
          this.totalSavings += this.monthlyContribution;
          this.totalSavings += this.totalSavings * (this.interestRate / 12);
        }
      }
      console.log(`Total savings after ${year} years: ${this.totalSavings}`);
      localStorage.setItem('totalSavings', this.totalSavings);
      localStorage.setItem('year', this.years);
    }
  }
    
  ngOnInit() {
    this.storedUsername = localStorage.getItem('username') || this.storedUsername;
  }
}
