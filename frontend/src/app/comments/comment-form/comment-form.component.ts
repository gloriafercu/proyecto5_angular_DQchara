import { Component, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/restaurants/models/restaurant.model';
import { IComment } from '../models/comment.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
// import { IUser } from 'src/app/users/models/user.model';
// import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit{

  restaurant: IRestaurant | undefined;
  comment: IComment | undefined;
  restaurants: IRestaurant[] = [];
  // user: IUser| undefined;

  commentForm = new FormGroup({
    id: new FormControl<number>(0),
    description: new FormControl<string>('', [Validators.required]),
    rating: new FormControl<number>(0, [Validators.required]),
    restaurant: new FormControl<any>(null),
    // user: new FormControl<any>(null)
  })

  constructor(
    private commentService: CommentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    // private userService: UserService
    ) { }


    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        const idRestStr = params['restaurantId'];
        const idCommentStr = params['commentId'];
  
        if (idRestStr) {
          const restaurantId = parseInt(idRestStr, 10);
          this.restaurantService.getById(restaurantId).subscribe(data => this.restaurant = data);
        }
  
        if (idCommentStr) {
          const commentId = parseInt(idCommentStr, 10);
          this.commentService.getById(commentId).subscribe(comment => {
            this.loadCommentForm(comment);
            this.comment = comment; // Guarda la reserva para luego recuperar los datos en la edición
          });
        }
  
      });
  
    }
    loadCommentForm(comment: IComment): void {
      this.commentForm.reset({
        id: comment.id,
        description: comment.description,
        rating: comment.rating,
        restaurant: comment.restaurant,
        // user: comment.user
        
      });
  
    }
    save(): void {

      // TODO añadir validación extra de datos, si alguno está mal hacer return y mostrar error y no guardar.
      let id = this.commentForm.get('id')?.value ?? 0;
      let description = this.commentForm.get('description')?.value ?? '';
      let rating = this.commentForm.get('rating')?.value ?? 0;
     
      // let restaurant = this.restaurant?.id ?? this.booking?.restaurant.id ?? 0;
      let restaurant = this.commentForm.get('restaurant')?.value ?? this.restaurant ;
      // let user = this.commentForm.get('restauruserant')?.value ?? this.user ;


let comment: IComment = {
  id: id,
  description: description,
  rating: rating,
  restaurant: restaurant,
  // user: user
}

if (id === 0)
  this.commentService.create(comment).subscribe(
    comment => this.router.navigate(['/comments/comment-list'])
  );

}
}
