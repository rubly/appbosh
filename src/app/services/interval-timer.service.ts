import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoutineData } from '../models/routine-data';

@Injectable({
  providedIn: 'root'
})
export class IntervalTimerService {

  private _url = 'https://localhost:44372/api/Routines';

  constructor(private _httpClient: HttpClient) { }

  getRoutines(): Observable<RoutineData[]> {
    return this._httpClient.get<RoutineData[]>(this._url);
  }

  saveRoutine(routine: RoutineData): Observable<RoutineData> {
    return this._httpClient.post<RoutineData>(this._url, routine);
  }

  deleteRoutine(id: number): Observable<RoutineData> {
    return this._httpClient.delete<RoutineData>(`${this._url}/${id}`);
  }
}
