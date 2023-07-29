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
  myRestaurant: IRestaurant | undefined;

  comments: IComment[] = [];
  comment: IComment | undefined;
  average: number | undefined;

  constructor(private activedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private commentService: CommentService) { }


  ngOnInit(): void {
    this.restaurantService.findCurrentRestaurant().subscribe(data => this.myRestaurant = data);

    this.activedRoute.params.subscribe(params => {
      const idString = params['id']; // extraer id del restaurante de la dirección url
      if (!idString) return; // comprueba si el id existe
      const id = parseInt(idString, 10);
      console.log('id', id)
      this.restaurantService.getById(id).subscribe(data => this.restaurant = data);
      this.commentService.getAllCommentsByRestaurantId(id).subscribe(data => {
        this.comments = data;
        if (this.comments.length === 0) return;
        this.commentService.getAverageByRestaurantId(id).subscribe(data => this.average = data);
      });
    });
  };
}




