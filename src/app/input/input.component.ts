import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  initialAmount: any = '';
  monthlyContribution: any = '';
  interestRate: any = '';
  years: any = '';
  totalSavings: any = '';
  storedUsername: string = 'username';
  storedUserId: number | undefined;
  targetAmount: any = '';

  constructor(private router: Router) { }
  //calculating savings based on monthly contribtutions and interestrate
  calculateSavings() {
    let savingsByYear = [5, 10, 15, 20, 25, 30];
    // An empty array "results" is defined to store the calculated results.
    let results = [];
    //Calculates total savings each year by resetting this.totalSavings to this.initialAmount and using the current year from the savingsByYear array.
    for (let year of savingsByYear) {
      this.totalSavings = this.initialAmount;
      this.years = year;
      //Calculates total savings over specified number of years by adding monthly contribution and interest to the total savings each month.
      for (let i = 0; i < this.years; i++) {
        for (let j = 0; j < 12; j++) {
          this.totalSavings += this.monthlyContribution;
          this.totalSavings += this.totalSavings * ((this.interestRate / 100) / 12);
        }
      }
      //Pushes an object with the current year (this.years) and its corresponding savings (this.totalSavings) to the results array.
      results.push({ year: this.years, savings: this.totalSavings });
    }

//set results array in local storage
    localStorage.setItem('results', JSON.stringify(results));
    localStorage.setItem('targetAmount', JSON.stringify(this.targetAmount));
    console.log(localStorage.getItem('targetAmount'));
    console.log(localStorage.getItem('results'));
    this.router.navigate(['/results']);
  }

  ngOnInit() {
    this.storedUsername = localStorage.getItem('username') || this.storedUsername;
    this.storedUserId = Number(localStorage.getItem('userId')) || this.storedUserId;
  }
}
