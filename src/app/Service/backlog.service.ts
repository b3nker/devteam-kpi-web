import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Backlog} from '../Model/backlog';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BacklogService {
  private BASE_URL = '/api/backlog';

  constructor(private http: HttpClient) { }

  getBacklog(): Observable<Backlog> {
    return this.http.get<Backlog>(this.BASE_URL);
  }
}
