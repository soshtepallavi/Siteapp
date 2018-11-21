import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  data: any = [];
  username:string="";
  password:string="";
  hide = true;
  getData:string='';
  constructor(private router:Router,private toastr: ToastrService,public loginService: LoginService) { }


  ngOnInit() {
  }

  login(){
    try {
      console.log(this.username);
      console.log(this.password);
      this.getData= "usr="+this.username+"&pwd="+this.password;
       this.loginService.login(this.getData)
       .subscribe(resp => {
         console.log(resp, "res");
         this.data = resp;
         this.toastr.success('You are successfully login!', 'Success!',{timeOut: 3000});
        this.router.navigate(['dashboard']);

       },
         error => {
          //  console.log(error, "error");
          this.toastr.error('Your username and password is incorrect!', 'Oops!',{timeOut: 1000});
         })
   } catch (e) {
     console.log(e);
   }
    // console.log(this.username);
    // console.log(this.password);

    // if(this.username=="admin" && this.password=="admin"){
    //   this.toastr.success('You are successfully login!', 'Success!',{timeOut: 3000});
    //   this.router.navigate(['dashboard']);
      
    // }else{
    //   this.toastr.error('Your username and password is incorrect!', 'Oops!',{timeOut: 1000});
    // }

   
  } 

}
