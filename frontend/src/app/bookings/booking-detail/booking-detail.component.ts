import { Component, OnInit } from '@angular/core';
import { IBooking } from '../models/booking.model';
import { IRestaurant } from 'src/app/restaurants/models/restaurant.model';
import { IUser } from 'src/app/users/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { UserService } from 'src/app/users/services/user.service';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit{

  booking: IBooking | undefined;
  restaurant: IRestaurant | undefined;
  user: IUser | undefined;

  constructor( private activatedRoute: ActivatedRoute, private bookingService: BookingService, 
    private restaurantService: RestaurantService, private userService: UserService){}

    ngOnInit(): void {
      this.activatedRoute.params.subscribe( params => {
        const id = parseInt(params['id'],10);
        this.bookingService.getById(id).subscribe(data => {
          this.booking = data;
          if ( !(this.booking.restaurantId > 0) && !(this.booking.userId > 0)) return;

          this.restaurantService.getById(this.booking.restaurantId).subscribe(data => this.restaurant = data);
          this.userService.getById(this.booking.userId).subscribe(data => this.user = data);


        });
      });
    }   
 
}
