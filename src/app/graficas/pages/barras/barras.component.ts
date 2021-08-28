import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {
  
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#6CF581', hoverBackgroundColor: 'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#128CE3', hoverBackgroundColor: 'red' },
    { data: [22, 28, 30, 59, 96, 17, 10], label: 'Series C', backgroundColor: '#9D07F0', hoverBackgroundColor: 'red' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
     ];
     this.barChartData[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
     ];
     this.barChartData[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
     ];

  }
}
