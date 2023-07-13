import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  urlAPI: string = "http://localhost:3000/bookings"

  constructor(private httpClient: HttpClient) { }

  create(booking: IBooking): Observable<IBooking> {
    return this.httpClient.post<IBooking>(this.urlAPI, booking);
  }

  update(booking: IBooking): Observable<IBooking> {
    return this.httpClient.put<IBooking>(`${this.urlAPI}/${booking.id}`, booking);
  }

  getById(id: number): Observable<IBooking> {
    return this.httpClient.get<IBooking>(`${this.urlAPI}/${id}`);
  }

  getAll(): Observable<IBooking[]> {
    return this.httpClient.get<IBooking[]>(this.urlAPI);
  }

  getAllByRestaurantId(restaurantId: number): Observable<IBooking[]> {
    return this.httpClient.get<IBooking[]>(`${this.urlAPI}/restaurant/${restaurantId}`);
  }

  getAllByUserId(userId: number): Observable<IBooking[]> {
    return this.httpClient.get<IBooking[]>(`${this.urlAPI}/user/${userId}`);
  }

  deleteById(id: number): Observable<{}> {
    return this.httpClient.delete(`${this.urlAPI}/${id}`);
  }


}
