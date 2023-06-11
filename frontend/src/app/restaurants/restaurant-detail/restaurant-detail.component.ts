import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/comments/services/comment.service';
import { IComment } from 'src/app/comments/models/comment.model';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: IRestaurant | undefined;
  comments: IComment[] = []

  constructor(private activedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private commentService: CommentService,
    private userService: UserService) { };

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      const idString = params['id']; // extraer id de la dirección
      if (!idString) return; // comprueba si el id existe
      const id = parseInt(idString, 10);
      console.log(id)
      this.restaurantService.getById(id).subscribe(data => this.restaurant = data);
      this.commentService.getAllCommentsByrestaurantId(id).subscribe(data => this.comments = data);
      this.commentService.getAllUSersByComments(id).subscribe(data => this.comments = data);
      
//Unir nombre de usuario con el número de userId del comentario. 
      this.commentService.getById(id).subscribe(data => {
        this.comment = data;
        if (!(this.comment.userId > 0)) return;
        this.userService.getById(this.comment.userId).subscribe(data => this.user = data)
      });

    });
  }

}
