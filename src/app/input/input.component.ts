import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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
      localStorage.setItem('totalSavings', this.totalSavings);
      localStorage.setItem('year', this.years);
    }
    this.router.navigate(['/results']);
  }
    
  ngOnInit() {
    this.storedUsername = localStorage.getItem('username') || this.storedUsername;
  }
}

