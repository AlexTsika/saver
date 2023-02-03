import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { Router } from '@angular/router';
Chart.register(...registerables);

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
})
export class ResultsComponent {
    constructor(private router: Router) { }

    ngOnInit(): void {
        this.renderchart();
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
        localStorage.removeItem('results');
        this.router.navigate(['/input']);
    }

}