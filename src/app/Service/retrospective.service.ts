import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Retrospective} from '../Model/retrospective';
import {Config} from '../Model/config';

@Injectable({
  providedIn: 'root'
})
export class RetrospectiveService {
  private BASE_URL = Config.retrospectiveBaseURL;

  constructor(private http: HttpClient) {}

  /**Retrieves retrospective objects by performing a GET request to kpi-api
   *
   */
  getRetrospectives(): Observable<Retrospective[]> {
    return this.http.get<Retrospective[]>(this.BASE_URL);
  }
}
