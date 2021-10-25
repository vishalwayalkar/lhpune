import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './interface/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:9999/login";

  constructor(private _http: HttpClient) { }

  getUser() {
    return this._http.get<Login[]>(this.url);
  }

  signIn(user: string) {
    sessionStorage.setItem("user", user);
  }
  signOut() {
    sessionStorage.removeItem('user');
  }

}
