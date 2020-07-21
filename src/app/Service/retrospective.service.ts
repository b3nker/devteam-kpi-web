import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Retrospective, RetrospectiveAdapter} from '../Model/retrospective';

@Injectable({
  providedIn: 'root'
})
export class RetrospectiveService {
  private BASE_URL = '//localhost:8080/retrospective';

  constructor(private http: HttpClient) {}

  getRetrospectives(): Observable<Retrospective[]> {
    return this.http.get<Retrospective[]>(this.BASE_URL);
  }
}
