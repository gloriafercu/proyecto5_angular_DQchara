import { Component, OnInit } from '@angular/core';
import { IBooking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  displayedColumns: string[] = [
    'restaurantId',
    'bookingDate',
    'bookingTime',
    'peopleNumber',
    'notes',
    'actions',
  ];
  bookings: IBooking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAll()
      .subscribe(data => this.bookings = data);
  }


}
