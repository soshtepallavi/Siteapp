import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  input:string="";
  password:string="";
  text="";
 

 
  constructor() { }

  ngOnInit() {
  }

  form(){
    console.log(this.input);
    console.log(this.password);
    console.log(this.text);

  
  

  }

}

