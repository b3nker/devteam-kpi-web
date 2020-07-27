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
  constructor() {}
}
