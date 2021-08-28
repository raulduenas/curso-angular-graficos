import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  
  @Input() barChartLabels: Label[] = [
  //  '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#6CF581', hoverBackgroundColor: 'red' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#128CE3', hoverBackgroundColor: 'red' },
  //   { data: [22, 28, 30, 59, 96, 17, 10], label: 'Series C', backgroundColor: '#9D07F0', hoverBackgroundColor: 'red' }
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType='horizontalBar';
    }
  }
}
