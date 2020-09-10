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

  getComments(): Observable<HttpResponse<Comment[]>>{
    return this.http.get<Comment[]>(this.BASE_URL, {observe: 'response'});
  }
  getComment(sprintId: number): Observable<HttpResponse<Comment>>{
    return this.http.get<Comment>(this.BASE_URL + '/' + sprintId, {observe: 'response'});
  }

  postComment(comment: Comment): Observable<HttpResponse<Comment>>{
    return this.http.post<Comment>(this.BASE_URL, comment, {observe: 'response'});
  }
}
