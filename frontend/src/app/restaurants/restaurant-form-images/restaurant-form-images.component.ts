import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../models/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BASE_URL } from 'src/app/shared/constants';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-form-images',
  templateUrl: './restaurant-form-images.component.html',
  styleUrls: ['./restaurant-form-images.component.css']
})
export class RestaurantFormImagesComponent implements OnInit{

  restaurant: IRestaurant | undefined;
  imagePreviews: string[] = [];
  imageFiles: File[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private httpClient: HttpClient
    ) {}

  ngOnInit(): void {
    this.loadRestaurant();
  }
  loadRestaurant() {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.restaurantService.getById(id)
                    .subscribe(data => {
        this.restaurant = data;
      });
    });
  }
  onFileSelected(event: Event) {
    let target = event.target as HTMLInputElement;
    if (target.files === null) return;

    for(let i = 0; i < target.files.length; i++) {
      this.imageFiles.push(target.files[i]);
      let reader = new FileReader();
      reader.onload = ev => this.imagePreviews.push(reader.result as string);
      reader.readAsDataURL(target.files[i]);
    }
  }

  save() {
    if(this.imageFiles.length === 0) return;

    // Cargar las imágenes en un objeto FormData
    let formData = new FormData();
    this.imageFiles.forEach(file => {
      formData.append('file', file); // file0, file1, file2....
    });

    // http://localhost:3000/restaurants/2/images
    this.httpClient
      .post(`${BASE_URL}/books/${this.restaurant?.id}/images`, formData)
      .subscribe(data => {
        console.log(data);
        this.loadRestaurant();
        this.imageFiles = [];
        this.imagePreviews = [];
      });

  }

}
