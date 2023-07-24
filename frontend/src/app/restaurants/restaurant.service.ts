import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from './models/restaurant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {



  urlAPI: string = "http://localhost:3000/restaurants";

  constructor(private httpClient: HttpClient) { }

  getAllRestaurants(): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(this.urlAPI);
  }
  getById(id: number): Observable<IRestaurant> {
    return this.httpClient.get<IRestaurant>(`${this.urlAPI}/id/${id}`);
  }
  getByRating(rating: number): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(`${this.urlAPI}/rating/${rating}`);

  }
  getByTypeFood(typeFood: string): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(`${this.urlAPI}/typeFood/${typeFood}`);
  }
  getByCity(city: string): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(`${this.urlAPI}/city/${city}`);
  }

  getAllByNameLike(name: string): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(`${this.urlAPI}/name-like/${name}`)
  }

  getRestaurantByAuthenticatedRest(): Observable<IRestaurant> {
    return this.httpClient.get<IRestaurant>(`${this.urlAPI}/current`);
  }

  getAllOrderByRating(rating: string): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(`${this.urlAPI}/rating/${rating}`)
  }

  getAllOrderByAverage(averagePrice: string): Observable<IRestaurant[]> {
    return this.httpClient.get<IRestaurant[]>(`${this.urlAPI}/averagePrice/${averagePrice}`)
  }

  create(restaurant: IRestaurant): Observable<IRestaurant> {
    return this.httpClient.post<IRestaurant>(this.urlAPI, restaurant);
  }

  update(restaurant: IRestaurant): Observable<IRestaurant> {
    return this.httpClient.put<IRestaurant>(`${this.urlAPI}/${restaurant.id}`, restaurant);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.urlAPI}/${id}`);
  }

  
  findCurrentRestaurant(): Observable<IRestaurant> {
    return this.httpClient.get<IRestaurant>(`${this.urlAPI}/my-restaurant`);
  }


}
