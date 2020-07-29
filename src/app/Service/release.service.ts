import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sprint, SprintAdapter} from '../Model/sprint';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Release, ReleaseAdapter} from '../Model/release';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {
  private BASE_URL = '/api/release';

  constructor(private http: HttpClient, private adapter: ReleaseAdapter) { }

  getReleases(): Observable<Release[]> {
    return this.http.get(this.BASE_URL).pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }
}
