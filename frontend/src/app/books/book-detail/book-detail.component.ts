import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';
import { IRestaurant } from 'src/app/restaurants/models/restaurant.model';
import { IUser } from 'src/app/users/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { UserService } from 'src/app/users/services/user.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: IBook | undefined;
  restaurant: IRestaurant | undefined;
  user: IUser | undefined;

  constructor( private activatedRoute: ActivatedRoute, private bookService: BookService, 
    private restaurantService: RestaurantService, private userService: UserService){}

    ngOnInit(): void {
      this.activatedRoute.params.subscribe( params => {
        const id = parseInt(params['id'],10);
        this.bookService.getById(id).subscribe(data => {
          this.book = data;
          if ( !(this.book.restaurantId > 0) && !(this.book.userId > 0)) return;

          this.restaurantService.getById(this.book.restaurantId).subscribe(data => this.restaurant = data);
          this.userService.getById(this.book.userId).subscribe(data => this.user = data);
  
  
        });
      });
    }   



}
