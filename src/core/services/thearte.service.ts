import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import {errorResponce, performances, sessions} from '../mock-data';
import { IPerformance, ISession } from '../models/theatre.model';
import { delay } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

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
    return of(new HttpResponse({ status: 201, body: form })).pipe(delay(2000));
  }
  errorBookOrder(form) {
    return throwError({ status: 400, error: errorResponce });
  }
}
