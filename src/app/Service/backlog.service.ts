import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Backlog} from '../Model/backlog';
import {Observable} from 'rxjs';
import {Config} from '../Model/config';

@Injectable({
  providedIn: 'root'
})
export class BacklogService {
  private BASE_URL = Config.backlogBaseURL;

  constructor(private http: HttpClient) { }

  /** Retrieve Backlog object from back-end REST API (kpi-api)
   */
  getBacklog(): Observable<Backlog> {
    return this.http.get<Backlog>(this.BASE_URL);
  }
}
