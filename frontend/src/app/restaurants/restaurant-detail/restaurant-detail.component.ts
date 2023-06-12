import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/comments/services/comment.service';
import { IComment } from 'src/app/comments/models/comment.model';
import { UserService } from 'src/app/users/services/user.service';
import { IUser } from 'src/app/users/models/user.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: IRestaurant | undefined;
  comments: IComment[] = []
  user: IUser | undefined

  constructor(private activedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private commentService: CommentService,
    private userService: UserService) { };

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      const idString = params['id'];
      if (!idString) return;
      const id = parseInt(idString, 10);
      console.log(id)
      this.restaurantService.getById(id).subscribe(data => this.restaurant = data);
      this.commentService.getAllCommentsByrestaurantId(id).subscribe(data => {
        this.comments = data        
        this.userService.getById(id).subscribe(data => this.user = data)
        })

      });
    };
  }
