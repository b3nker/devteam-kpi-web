import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../Model/comment';
import {Config} from '../Model/config';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private BASE_URL = Config.commentBaseURL;

  constructor(private http: HttpClient) { }

  /**Performs a GET request that retrieves a comment given a sprintId.
   * @param sprintId comment linked to sprint with id corresponding to this parameter
   */
  getComment(sprintId: number): Observable<HttpResponse<Comment>>{
    return this.http.get<Comment>(this.BASE_URL + '/' + sprintId, {observe: 'response'});
  }

  /**Performs a POST request that adds input comment to kpi-api
   * @param comment, Object we add to kpi-api
   */
  postComment(comment: Comment): Observable<HttpResponse<Comment>>{
    return this.http.post<Comment>(this.BASE_URL, comment, {observe: 'response'});
  }
}
