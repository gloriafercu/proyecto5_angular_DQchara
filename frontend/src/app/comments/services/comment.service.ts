import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  urlAPI: string = "http://localhost:5000/restaurants";

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<IComment> {
    return this.httpClient.get<IComment>(`${this.urlAPI}/${id}`);
  }
  getByRating(rating: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${this.urlAPI}?rating=${rating}`);
  }

  create(comment: IComment): Observable<IComment> {
    return this.httpClient.post<IComment>(this.urlAPI, comment);
  }

  update(comment: IComment): Observable<IComment> {
    return this.httpClient.put<IComment>(`${this.urlAPI}/${comment.id}`, comment);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.urlAPI}/${id}`);
  }
  findAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.urlAPI);
  }
}