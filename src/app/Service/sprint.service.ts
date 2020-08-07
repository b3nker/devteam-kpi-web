import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Sprint} from '../Model/sprint';
import {SprintAdapter} from './adapter/sprint-adapter';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  private BASE_URL = '/api/sprint';

  constructor(private http: HttpClient, private adapter: SprintAdapter) {
  }

  getSprints(): Observable<Sprint[]> {
    return this.http.get(this.BASE_URL).pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }

  getSprint(currentUrl: string): Observable<Sprint[]>{
    return this.http.get(this.BASE_URL + currentUrl).pipe(
        map((data: any) => [data].map((item) => this.adapter.adapt(item)))
    );
  }
}
