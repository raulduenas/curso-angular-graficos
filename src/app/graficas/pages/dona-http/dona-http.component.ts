import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
  //  'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: MultiDataSet = [
  //  [350, 450, 100, 150],
  ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] =[
    {
      backgroundColor: [
        '#1BE6CB',
        '#128CFC',
        '#BBF777',
        '#74FC92',
        '#2411F2'
      ]
    }
  ]

  constructor( private graficaService: GraficasService) { }

  ngOnInit(): void {
    // this.graficaService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     console.log(data);
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    //   })

    this.graficaService.getUsuariosRedesSocialesDonaData()
       .subscribe( ({ labels, values }) => {
         this.doughnutChartLabels = labels;
         this.doughnutChartData.push(values);
       });
  }

}
