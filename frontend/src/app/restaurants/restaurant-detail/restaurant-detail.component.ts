import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/comments/services/comment.service';
import { IComment } from 'src/app/comments/models/comment.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: IRestaurant | undefined;
  comments: IComment[] = [];
  comment: IComment | undefined;
  average: number | undefined;

  constructor(private activedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private commentService: CommentService) { };


  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      const idString = params['id']; // extraer id del restaurante de la dirección url
      if (!idString) return; // comprueba si el id existe
      const id = parseInt(idString, 10);
      console.log('id', id)
      this.restaurantService.getById(id).subscribe(data => this.restaurant = data);
      this.commentService.getAllCommentsByRestaurantId(id).subscribe(data => {
        this.comments = data;
        let ratingsArray = this.comments.map(comment => comment.rating);
        ratingsArray = ratingsArray.map(i => Number(i)); // Array de strings lo pasamos a numbers
        let averageValue = ratingsArray.reduce((acc, rate) => acc + rate, 0) / ratingsArray.length;
        this.average = parseFloat(averageValue.toFixed(1));
      //  let newRestaurant: IRestaurant= {
      //    rating: this.average,
      //    id: id,
      //    name:this.restaurant?.name,
      //    address: '',
      //    city: '',
      //    phone: '',
      //    web: '',
      //    email: '',
      //    averagePrice: 0,
      //    availability: false,
      //    typeFood: '',
      //    photos: [],
      //    iframe: ''
      //  }
      
      });
      
     
    });
  };
}




