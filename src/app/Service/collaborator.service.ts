import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {Collaborator, CollaboratorAdapter} from '../Model/collaborator';
@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  private BASE_URL = '//localhost:8080';

  constructor(private http: HttpClient, private adapter: CollaboratorAdapter) {
  }

  getCollaborators(currentUrl: string): Observable<Collaborator[]> {
    return this.http.get(this.BASE_URL + currentUrl).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }
}
