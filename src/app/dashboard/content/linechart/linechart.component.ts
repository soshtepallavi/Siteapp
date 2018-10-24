import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public lineChartType:string = 'line';

  public lineChartData:Array<any> = [
    {data: [30, 50, 45, 81, 40, 55, 7], label: 'Sent'},
    {data: [20,  60, 40, 19, 86, 27, 90], label: 'Clicked'}
  ];



  public lineChartLabels:Array<any> = ['1', '2', '3', '4', '5', '6', '7'];

  public lineChartColors:Array<any> = [
      {
        backgroundColor: 'rgba(30,136,229 ,0.2)',
        borderColor: 'rgba(30,136,229 ,1)',
        borderWidth: 2,
        pointBackgroundColor: '#26c6da',
        pointBorderColor: '#26c6da',
         
         
      },
      {
      backgroundColor: 'rgba(103,58,183 ,0.2)',
      borderColor: 'rgba(103,58,183 ,1)',
      borderWidth: 2,
      pointBackgroundColor: '#7460ee',
      pointBorderColor: '#7460ee',
       
    }
     
  ];

  public lineChartOptions:any = {
      responsive: true,
      legend: { position: 'bottom' }
      


  };
  public lineChartLegend:boolean = false;
  public chartClicked(e: any): void {
    console.log(e);
   }
  public chartHovered(e: any): void {
    console.log(e);
   }
}
