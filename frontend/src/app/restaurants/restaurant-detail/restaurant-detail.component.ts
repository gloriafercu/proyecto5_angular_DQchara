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
  comments: IComment[] = [];
  users: IUser[] = [];
  user: IUser | undefined;
  userId: number | undefined;

  constructor(private activedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private commentService: CommentService,
    private userService: UserService) { };

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      const idString = params['id']; // extraer id del restaurante de la dirección url
      if (!idString) return; // comprueba si el id existe
      const id = parseInt(idString, 10);
      this.restaurantService.getById(id).subscribe(data => this.restaurant = data);
      this.commentService.getAllCommentsByRestaurantId(id).subscribe(data => {

        console.log('gelAllcommentsrestid desde restaurant detail', data)
        console.log(data[0].userId);

        this.comments = data;

        for (let comment of this.comments) {

          console.log('userId', comment.userId);

          this.userId = comment.userId;

          console.log('ids', this.userId);

          this.userService.getById(this.userId).subscribe(data => {
            
            console.log('user:', data);
            this.users.push(data);
            console.log('users', this.users);

          });

        }



      });
    });
  }

}
