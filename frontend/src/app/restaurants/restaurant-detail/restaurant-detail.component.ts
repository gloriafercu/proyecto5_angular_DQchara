import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit{

  restaurant: IRestaurant | undefined;

  constructor(private activedRoute: ActivatedRoute,private restaurantService: RestaurantService) {};

  ngOnInit(): void {
    this.activedRoute.params.subscribe( params => {
      const restaurantId = parseInt(params['restaurantId'],10);
      this.restaurantService.getById(restaurantId).subscribe(data => this.restaurant = data);
    });
  }

}
