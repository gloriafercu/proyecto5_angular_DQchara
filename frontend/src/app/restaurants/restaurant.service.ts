import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from './models/restaurant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  urlAPI: string = "http://localhost:5000/restaurants";

  constructor(private httpClient: HttpClient) { }

  getAllRestaurants(): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(this.urlAPI);
  }
}
