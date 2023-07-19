import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  urlAPI: string = "http://localhost:3000/comments";

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<IComment> {
    return this.httpClient.get<IComment>(`${this.urlAPI}/${id}`);
  }
  getByRating(rating: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${this.urlAPI}/rating/${rating}`);
  }

  getAverageByRestaurantId(restaurantId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.urlAPI}/average/${restaurantId}`)
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
  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.urlAPI);
  }

  getAllCommentsByRestaurantId(restaurantId: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${this.urlAPI}/restaurantId/${restaurantId}`);
  }

  getAllCommentsByUserId(userId: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${this.urlAPI}/userId/${userId}`);
  }


}
