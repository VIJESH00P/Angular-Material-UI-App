import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Yearly Income Evaluation 2021-2023',
          align: 'center'
      },
      subtitle: {
          text: 'XYZ Company',
          align: 'center'
      },
      xAxis: {
          categories: ['Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022', 'Q2 2022',
              'Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023']
      },
      yAxis: {
          title: {
              text: 'Billion Crore'
          }
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Total Income',
          data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
          ]
      }, {
          name: 'Total Expense',
          data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5
          ]
      }, {
          name: 'Profit',
          data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2]
      }]
  }
  HC_exporting(Highcharts);
  }
}
