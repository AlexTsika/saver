import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
Chart.register(...registerables);

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
})
export class ResultsComponent {
    
    target: any = (localStorage.getItem('targetAmount'));
    data: any = (localStorage.getItem('results'));
    goals:any;

    constructor(private router: Router) {
        this.goals = 0;
     }

    ngOnInit(): void {
        this.renderchart();
        this.goal();
     }

    renderchart() {
        //retrieve results array from local storage
        let data: any = (localStorage.getItem('results'));
        data = JSON.parse(data);
        // create a new array from the data object with only savings
        let savings = [];
        for (let i = 0; i < data.length; i++) {
            savings.push(data[i].savings);
        }
        console.log(savings);
        //creation of a line chart X-axis = number of years, y-axis = total savings   
        new Chart("linechart", {
            type: 'line',
            data: {
                labels: [5, 10, 15, 20, 25, 30],
                datasets: [{
                    label: 'Total Savings',
                    data: savings,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // back to input button
    backToInput() {
        this.router.navigate(['/input']);
    }

goal(){
  
  this.data = JSON.parse(this.data);
  console.log(this.data);
  console.log(this.target);
    if (this.target <= this.data[0].savings) {
    console.log("less than 5");
    this.goals = "less than 5";
  }
  for (let i = 0; i < this.data.length; i++){
    if (this.data[i].savings <= this.target && this.data[i+1].savings > this.target){
        console.log(this.data[i].year)
        this.goals=(this.data[i].year);
    }
    else if (this.target > this.data[this.data.length - 1].savings) {
    this.goals = 'more than 30'
  }
  }  
}
}