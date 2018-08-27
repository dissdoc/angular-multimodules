import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { LoginModel } from '../core/login/login.model';
import {RegisterModel} from '../core/register/register.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url = 'app/users';

  constructor(private _http: HttpClient) { }

  login(model: LoginModel): Observable<LoginModel> {
    return this._http.post<LoginModel>(`${this._url}/name=${model.name}`, model, httpOptions)
      .pipe(
        tap(user => this.setToken()),
        catchError((error: any, result: any) => {
          console.log(error);
          return of(result);
        })
      );
  }

  register(model: RegisterModel): Observable<RegisterModel> {
    return this._http.post<RegisterModel>(this._url, model, httpOptions)
      .pipe(
        tap(_ => console.log('register')),
        catchError((error: any, result: any) => {
          console.log(error);
          return of(result);
        })
      );
  }

  setToken() {
    localStorage.setItem('token', 'Bass');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
