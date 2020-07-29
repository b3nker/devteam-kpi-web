import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Backlog, BacklogAdapter} from '../Model/backlog';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BacklogService {
  private BASE_URL = '/api/backlog';
  constructor(private http: HttpClient, private adapter: BacklogAdapter) { }
  getBacklog(lastIndexUrl: string): Observable<Backlog[]> {
    return this.http.get(this.BASE_URL).pipe(
        map((data: any[]) => [data].map((item) => this.adapter.adapt(item)))
    );
  }
}
