import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  form=false;
  events: string[] = [];
  opened: boolean;
  showSideNav =false;
  innerWidth:number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

    if(this.innerWidth>1024){
      this.showSideNav =true;
    }

    console.log(this.showSideNav);
  }


  
  @ViewChild('sidenav') sidenav:any;
  @ViewChild('drawer') drawer:any;

      
  toggleSidevar()
    {
      this.sidenav.toggle();
      console.log(this.sidenav.toggle);
    }

    toggleDrawer()
    {
      this.drawer.toggle();
      console.log(this.drawer.toggle);
    }
    
  

  
  constructor() { }

  ngOnInit() {

    this.innerWidth = window.innerWidth;
    if(this.innerWidth>1024){
      this.showSideNav =true;
    }

    console.log(this.showSideNav);
  }

  ShowForm(){
    if(this.form){
      this.form = false;
    }else{
      this.form=true;
    }
  }
   
}

