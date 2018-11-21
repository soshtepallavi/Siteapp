import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'})
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(data) {
    // return this.http.post('139.59.10.101/api/method/login?usr=Administrator&pwd=Dinu@123',data);
    return this.http.get('http://192.168.2.32/api/method/login?'+ data,httpOptions)
  }
}
