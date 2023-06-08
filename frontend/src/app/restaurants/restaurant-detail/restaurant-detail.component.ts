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
  comments:IComment[]= []

  constructor(private activedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private commentService: CommentService) { };

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      const idString = params['id']; // extraer id de la dirección
      if (!idString) return; // comprueba si el id existe
      const id = parseInt(idString, 10);
      console.log(id)
      this.restaurantService.getById(id).subscribe(data => this.restaurant = data);
      this.commentService.getAllRestaurantById(id).subscribe(data => this.comments= data);

    });
  }

}
