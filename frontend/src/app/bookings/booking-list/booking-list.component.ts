import { Component, OnInit } from '@angular/core';
import { IBooking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';
import { IUser } from 'src/app/users/models/user.model';
import { IRestaurant } from 'src/app/restaurants/models/restaurant.model';

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
  
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAll()
      .subscribe(data =>{ 
        this.bookings = data;
      });
  }


}
