import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-three-d-chart',
  templateUrl: './three-d-chart.component.html',
  styleUrls: ['./three-d-chart.component.css']
})
export class ThreeDChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Large Shareholders ',
        align: 'center'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Medals',
        data: [
            ['Reliance Industries Limited', 30],
            ['Tata Consuitancy Services', 20],
            ['Bajaj Finance', 10],
            ['Sun Pharmaceutical', 12],
            ['Adani Enterprises', 10],
            ['Nesle India', 6],
            ['Vendanta', 5],
            ['DLF', 4],
            ['Shree cement', 3]

        ]
    }]
    }
  }
}
    
