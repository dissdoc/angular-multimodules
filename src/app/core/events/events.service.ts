import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { EventModel } from './event.model';

@Injectable()
export class EventsService {

  private eventsUrl = 'app/events';

  constructor(private _httpClient: HttpClient) { }

  getEvents(): Observable<EventModel[]> {
    return this._httpClient.get<EventModel[]>(this.eventsUrl)
      .pipe(
        tap(events => this.log('fetched events')),
        catchError(this.handleError('getEvents', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`LOG: ${message}`);
  }
}
