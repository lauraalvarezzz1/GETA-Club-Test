import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';


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
  dataSourceTwo: UserModel[];
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
  pieChartColors = [
    {
      backgroundColor: ['rgba(255,5,0,0.3)', 'rgba(4,255,0,0.3)'],
    },
  ];
  doughnutChartColor: Color[] = [
    { backgroundColor: 'black' },
    { backgroundColor: 'black' },
  ];
  
  constructor(public route: Router) { }

  ngOnInit() {
    this.filterPerTemperature = JSON.parse(localStorage.getItem('users'));

    if(this.filterPerTemperature) {
      this.dataSource = this.filterPerTemperature.filter((item: UserModel) => {
        if(item.temperature > 37) {
          this.hightTemperature = this.hightTemperature + 1;
          return item;
        } else {
          this.lowTemperature = this.lowTemperature + 1;
        }
      });
  
      this.dataSourceTwo = this.filterPerTemperature.filter((item: UserModel) => {
        if(item.temperature < 37) {
          return item;
        }
      });
      this.pieChartData = [this.lowTemperature, this.hightTemperature];
    }
  }

  goToForm() {
    this.route.navigateByUrl("/dashboard/form");
  }

}
