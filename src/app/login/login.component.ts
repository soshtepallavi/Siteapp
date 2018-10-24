import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  hide = true;
  constructor(private router:Router,private toastr: ToastrService) { }


  ngOnInit() {
  }
  login(){

    console.log(this.username);
    console.log(this.password);

    if(this.username=="admin" && this.password=="admin"){
      this.toastr.success('You are successfully login!', 'Success!',{timeOut: 3000});
      this.router.navigate(['dashboard']);
      
    }else{
      this.toastr.error('Your username and password is incorrect!', 'Oops!',{timeOut: 1000});
    }

   
  } 

}
