import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  urlAPI: string = "http://localhost:5000/bookings"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IBooking[]> {
    return this.httpClient.get<IBooking[]>(this.urlAPI);
  }
  getById(id: number): Observable<IBooking> {
    return this.httpClient.get<IBooking>(`${this.urlAPI}/${id}`);
  }

  getAllByRestaurantId(restaurantId: number): Observable<IBooking[]> {
    return this.httpClient.get<IBooking[]>(`${this.urlAPI}?restaurantId=${restaurantId}`);
  }
  getAllByUserId(userId: number): Observable<IBooking[]> {
    return this.httpClient.get<IBooking[]>(`${this.urlAPI}?userId=${userId}`);
  }

  create(booking: IBooking): Observable<IBooking> {
    return this.httpClient.post<IBooking>(this.urlAPI, booking);
  }

  update(booking: IBooking): Observable<IBooking> {
    return this.httpClient.put<IBooking>(`${this.urlAPI}/${booking.id}`, booking);
  }
  deleteById(id: number): Observable<{}> {
    return this.httpClient.delete(`${this.urlAPI}/${id}`);
  }

}
