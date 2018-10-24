import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }
  //colors
  pieChartColors:any = [
    {
        backgroundColor: [
        '#f2f4f8',
        '#26c6da',
        '#1e88e5',
        '#7460ee'
        ]
    }
];
  public pieChartOptions:any = {
   
    responsive: true,
    legend: { position: 'bottom' },
    percentageInnerCutout: 90
  };

 // Pie
 public pieChartLabels:string[] = ['tablet', 'Mobile', 'Desktop', 'others'];
 public pieChartData:number[] = [200, 300, 100,90];
 public pieChartType:string = 'doughnut';
 public pieChartLegend:boolean = false;

 events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }



}
