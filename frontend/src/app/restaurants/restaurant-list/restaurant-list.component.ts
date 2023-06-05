import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { IRestaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  displayedColumns: string[]= ['name','address','phone','web','averagePrice','actions'];

  restaurants: IRestaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getAllRestaurants();
    
  }

  getAllRestaurants(): void {
    this.restaurantService.getAllRestaurants().subscribe(data => this.restaurants = data);
  }

}
