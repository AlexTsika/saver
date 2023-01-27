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
  let yearData:any = JSON.parse(localStorage.getItem('year'));
  let totalsavingsData:string = JSON.parse(localStorage.getItem('totalsavings'));

  new Chart("linechart", {
      type: 'line',
      data: {
          labels: yearData,
          datasets: [{
              label: 'Total Savings',
              data: totalsavingsData,
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