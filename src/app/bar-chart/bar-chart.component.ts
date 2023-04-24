import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
   this.chartOptions={
    

      chart: {
          type: 'column'
      },
  
      title: {
          text: 'Products Profits',
          align: 'center'
      },
  
      xAxis: {
          categories: ['2020', '2021', '2022']
      },
  
      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              text: 'Millions'
          }
      },
  
      // tooltip: {
      //     formatter: function () {
      //         return '<b>' + this.x + '</b><br/>' +
      //             this.series.name + ': ' + this.y + '<br/>' +
      //             'Total: ' + this.point.stackTotal;
      //     }
      // },
  
      plotOptions: {
          column: {
              stacking: 'normal'
          }
      },
  
      series: [{
          name: 'Britain',
          data: [148, 133, 124],
          stack: 'Europe'
      }, {
          name: 'Germany',
          data: [102, 98, 65],
          stack: 'Europe'
      }, {
          name: 'United States',
          data: [113, 122, 95],
          stack: 'North America'
      }, {
          name: 'Canada',
          data: [77, 72, 80],
          stack: 'North America'
      }]
  }
    }
  }

