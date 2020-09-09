import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../Model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private BASE_URL = '/api/comment';

  constructor(private http: HttpClient) { }

  getComment(sprintId: number): Observable<Comment>{
    return this.http.get<Comment>(this.BASE_URL + '/' + sprintId);
  }

  postComment(comment: Comment): Observable<Comment>{
    return this.http.post<Comment>(this.BASE_URL, comment);
  }

  putComment(comment: Comment): Observable<Comment>{
    return this.http.put<Comment>(this.BASE_URL + '/' + comment.sprintId, comment);
  }
}
