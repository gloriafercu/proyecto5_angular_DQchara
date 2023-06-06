import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from './models/restaurant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  urlAPI: string = "http://localhost:10000/restaurants";

  constructor(private httpClient: HttpClient) { }

  getAllRestaurants(): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(this.urlAPI);
  }
  getById(restaurantId: number): Observable<IRestaurant> {
    return this.httpClient.get<IRestaurant>(`${this.urlAPI}/${restaurantId}`);
  }
  getByRating(rating: number): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(`${this.urlAPI}?rating=${rating}`);

  }
  getByTypeFood(typeFood: string): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(`${this.urlAPI}?typeFood=${typeFood}`);

  }

  create(restaurant: IRestaurant): Observable<IRestaurant> {
    return this.httpClient.post<IRestaurant>(this.urlAPI, restaurant);
  }

  update(restaurant: IRestaurant): Observable<IRestaurant> {
    return this.httpClient.put<IRestaurant>(`${this.urlAPI}/${restaurant.restaurantId}`, restaurant);
  }

  deleteById(restaurantId: number): void {
    this.httpClient.delete(`${this.urlAPI}/${restaurantId}`);
  }


}
