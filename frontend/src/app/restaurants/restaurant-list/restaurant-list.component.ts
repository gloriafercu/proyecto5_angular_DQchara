import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { IRestaurant } from '../models/restaurant.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { faSpoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }

  restaurants: IRestaurant[] = [];
  cities: string[] =[
    "Barcelona",
    "Cuenca",
    "León",
    "Lugo",
    "Madrid",
    "Palencia",
    "Sevilla",
    "Toledo",
    "Valencia",
    "Valladolid"

  ];
  food: string[]= [
    "Brasileña",
    "Española",
    "India",
    "Japonesa",
    "Mexicana"
  ];




  results_length: number = 0;
  page_Size: number = 6;
  page_number: number = 1;
  pageSizeOptions = [3, 9, 18, 30];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getAllRestaurants();
  }

  getAllRestaurants(): void {
    this.restaurantService.getAllRestaurants().subscribe(data => {
      this.restaurants = data;
      this.results_length = this.restaurants.length;
    }
    );

  }
  getByTypeFood(food: string): void {

    this.restaurantService.getByTypeFood(food).subscribe(data => {
      console.log('food',this.restaurants)
      this.restaurants = data;
    });
  }

  handleEvent(event: PageEvent) {
    this.page_Size = event.pageSize;
    this.page_number = event.pageIndex + 1;
    this.results_length = event.length;
  }


}
