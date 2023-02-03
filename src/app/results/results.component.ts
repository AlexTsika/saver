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
  let target: any = (localStorage.getItem('targetAmount'));
  let data: any = (localStorage.getItem('results'));
  data = JSON.parse(data);
  console.log(data);
  console.log(target);
    if (target <= data[0].savings) {
    console.log("less than 5");
    this.goals = "less than 5";
  }
  for (let i = 0; i < data.length; i++){
    if (data[i].savings <= target && data[i+1].savings > target){
        console.log(data[i].year)
        this.goals=(data[i+1].year);
    }
    else if (target > data[data.length - 1].savings) {
    this.goals = 'more than 30'
  }
  }  
}
}