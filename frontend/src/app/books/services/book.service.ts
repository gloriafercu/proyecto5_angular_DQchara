import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  findById(id: number) {
    throw new Error('Method not implemented.');
  }

  url: string = "http://localhost:5000/books"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.url);
  }
  getById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(`${this.url}/${id}`);
  }

  getAllByRestaurantId(restaurantId: number): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.url}?restaurantId=${restaurantId}`);
  }
  getAllByUserId(userId: number): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.url}?userId=${userId}`);
  }

  create(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(this.url, book);
  }

  update(book: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(`${this.url}/${book.id}`, book);
  }
  deleteById(id: number): Observable<{}> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}