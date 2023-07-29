import { Component, OnInit } from '@angular/core';
import { IBooking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';
import { IUser } from 'src/app/users/models/user.model';
import { IRestaurant } from 'src/app/restaurants/models/restaurant.model';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  displayedColumns: string[] = [
    'restaurant',
    'bookingDate',
    'bookingTime',
    'peopleNumber',
    'notes',
    'actions',
  ];
  bookings: IBooking[] = [];
  restaurant: IRestaurant | undefined;
  myRestaurant: IRestaurant | undefined;
  
  constructor(private bookingService: BookingService,  private router: Router,private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.bookingService.getAll()
      .subscribe(data =>{ 
        this.bookings = data;
      });
      this.restaurantService.findCurrentRestaurant().subscribe(data => this.myRestaurant = data);  
  }

  deleteBooking(booking: IBooking) {
    this.bookingService.deleteById(booking.id).subscribe({
      next: response => {
        console.log(response);
        // this.router.navigate(['/restaurants']);
        this.router.navigate(['/bookings/booking-list']);
        this.ngOnInit();
      },
      error: error => console.log(error) 
    });
  }
}
