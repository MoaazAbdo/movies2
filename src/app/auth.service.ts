import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _HttpClient:HttpClient,private _router: Router) { 
    
    if (localStorage.getItem("userToken") != null) {
      this.saveCurrentUser();
    }
  }

  currentUser = new BehaviorSubject(null);
  saveCurrentUser() {
    let token:any = localStorage.getItem("userToken");
    this.currentUser.next(jwtDecode(token));
    console.log(this.currentUser);
  }

  register(formData:any):Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup",formData);
    //return this._HttpClient.post("https://routeegypt.herokuapp.com/signup", formData);
  }

  login(login_form:any):Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",login_form);
    //return this._HttpClient.post("https://routeegypt.herokuapp.com/signin",login_form);
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem("userToken");
    this._router.navigate(['\login']);
  }
}
