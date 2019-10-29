import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { performances, sessions } from '../mock-data';
import { IPerformance, ISession } from '../models/theatre.model';

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
}
