import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {errorResponce, performances, sessions} from '../mock-data';
import { IPerformance, ISession } from '../models/theatre.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThearteService {

  constructor() {
  }

  getPerformances(): Observable<IPerformance> {
    return of(performances);
  }

  getSessions(): Observable<ISession> {
    return of(sessions);
  }

  bookOrder(form) {
    return of(form).pipe(delay(2000));
  }
  errorBookOrder(form) {
    return of(errorResponce).pipe(delay(2000));
  }
}
