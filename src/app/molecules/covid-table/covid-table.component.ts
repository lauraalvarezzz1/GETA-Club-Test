import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-covid-table',
  templateUrl: './covid-table.component.html',
  styleUrls: ['./covid-table.component.scss']
})
export class CovidTableComponent implements OnInit {
  displayedColumns: string[] = ['documentType', 'documentNumber', 'temperature'];
  dataSource: UserModel[];
  filterPerTemperature: [];
  lowTemperature: number = 0;
  hightTemperature: number = 0;
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  pieChartLabels: Label[] = ['Temperatura por debajo de 37 grados', 'Temperatura por encima de 37 grados'];
  pieChartData: number[];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  
  constructor() { }

  ngOnInit() {
    this.filterPerTemperature = JSON.parse(localStorage.getItem('users'));

    this.dataSource = this.filterPerTemperature.filter((item: UserModel) => {
      if(item.temperature > 37) {
        this.hightTemperature = this.hightTemperature + 1;
        return item;
      } else {
        this.lowTemperature = this.lowTemperature + 1;
      }
    });
    this.pieChartData = [this.lowTemperature, this.hightTemperature];
  }

}
