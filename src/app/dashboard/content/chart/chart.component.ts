import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public chartType:string = 'bar';

  public chartDatasets:Array<any> = [
      {data: [65, 80, 56, 55], label: 'My First dataset'},
      
  ];

  public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr'];

  public chartColors:Array<any> = [
      {
          backgroundColor: '#f2f4f8',
          borderColor: '#f2f4f8',
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
      },
      
  ];

  public chartOptions:any = {
    
      responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
