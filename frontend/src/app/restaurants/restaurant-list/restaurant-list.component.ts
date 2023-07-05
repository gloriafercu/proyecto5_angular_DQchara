import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { IRestaurant } from '../models/restaurant.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FilterNamePipe } from 'src/app/pipes/filter-name.pipe';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} eggs`;
  }

  restaurants: IRestaurant[] = [];
  cities: string[] = [
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

  food: string[] = [
    "Brasileña",
    "Española",
    "India",
    "Japonesa",
    "Mexicana",
    "Italiana"
  ];

  //properties!: string;
  filterName = '';


  // parameter1 ='price';
  // parameter2 ='asc';
  // parameter3 ='rating';
  // parameter4 ='asc';

  results_length: number = 0;
  page_Size: number = 6;
  page_number: number = 1;
  pageSizeOptions = [3, 9, 18, 30];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('dinamicTitle') dinamicTitleInTS!: ElementRef;


  constructor(private restaurantService: RestaurantService, private router: Router, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.getAllRestaurants();
  }

  getAllRestaurants(): void {
    this.restaurantService.getAllRestaurants().subscribe(data => {
      this.restaurants = data;
      this.results_length = this.restaurants.length;
      const dinamicTitle = this.dinamicTitleInTS.nativeElement;
      this.renderer2.setProperty(dinamicTitle, 'innerHTML', "Todos los restaurantes");

    });
  }

  /


  getByTypeFood(food: string): void {
    this.router.navigate(['/restaurants/typeFood', food])
    this.restaurantService.getByTypeFood(food).subscribe(data => {
      this.restaurants = data;
      this.results_length = this.restaurants.length;
      const dinamicTitle = this.dinamicTitleInTS.nativeElement;
      this.renderer2.setProperty(dinamicTitle, 'innerHTML', `Restaurantes de comida ${food}`);

    });
  }

  getByCity(city: string): void {
    this.router.navigate(['/restaurants/city', city])
    this.restaurantService.getByCity(city).subscribe(data => {
      this.restaurants = data;
      this.results_length = this.restaurants.length;
      const dinamicTitle = this.dinamicTitleInTS.nativeElement;
      this.renderer2.setProperty(dinamicTitle, 'innerHTML', `Restaurantes en ${city}`);
    })
  }

  handleEvent(event: PageEvent) {
    this.page_Size = event.pageSize;
    this.page_number = event.pageIndex + 1;
    this.results_length = event.length;
  }

}
