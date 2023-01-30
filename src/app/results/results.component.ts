import { Component } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent{
constructor() {}

ngOnInit(): void {
  this.renderchart();
}

renderchart(){
  let data:any = (localStorage.getItem('results'));
  console.log(data);
  
  
  new Chart("linechart", {
      type: 'line',
      data: {
          labels: [5, 10, 15, 20, 25, 30],
          datasets: [{
              label: 'Total Savings',
              data: data.savings,
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

}