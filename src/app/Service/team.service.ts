import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Team, TeamAdapter} from '../Model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private BASE_URL = '//localhost:8080';
  constructor(private http: HttpClient, private adapter: TeamAdapter) {}
  /*
  Method that returns an array of teams, doesn't work when returning a unique team
   */
  getTeams(url: string): Observable<Team[]>{
    return this.http.get(this.BASE_URL + url).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }
  /*
  Method that returns one team in an array of team, doesn't work when returning multiple teams
   */
  getTeam(url: string): Observable<Team[]>{
    return this.http.get(this.BASE_URL + url).pipe(
      map((data: any[]) => [data].map((item) => this.adapter.adapt(item)))
    );
  }
}
