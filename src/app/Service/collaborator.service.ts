import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Collaborator} from '../Model/collaborator';
import {CollaboratorAdapter} from './adapter/collaborator-adapter';
import {Config} from '../Model/config';
@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  private BASE_URL = Config.baseURL;

  constructor(private http: HttpClient, private adapter: CollaboratorAdapter) {
  }

  /**
   * Retrieves all collaborators data from kpi-api (GET)
   * @param currentUrl, collaborator URL (last segment)
   */
  getCollaborators(currentUrl: string): Observable<Collaborator[]> {
    return this.http.get(this.BASE_URL + currentUrl).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }
}
