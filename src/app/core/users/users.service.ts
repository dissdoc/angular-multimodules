import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'app/users';

  constructor(private _httpClient: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>(this.usersUrl)
      .pipe(
        tap(users => console.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
