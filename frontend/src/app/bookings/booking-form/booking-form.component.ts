import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { IRestaurant } from 'src/app/restaurants/models/restaurant.model';
import { IUser } from 'src/app/users/models/user.model';
import { UserService } from 'src/app/users/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { IBooking } from '../models/booking.model';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  restaurants: IRestaurant[] = [];
  users: IUser[] = [];

  times: string[] = ["13:00","14:00","15:00","19:00","20:00","21:00","22:00"]

  bookingForm = new FormGroup({

    id: new FormControl<number>(0),
    bookingDate: new FormControl<Date | null>(new Date(), [Validators.required]),
    bookingTime: new FormControl<string[]>([], [Validators.required]),
    userId: new FormControl<number>(0, [Validators.required]),
    restaurantId: new FormControl<number>(0, [Validators.required]),
    availability: new FormControl<boolean>(false, [Validators.requiredTrue]),
    peopleNumber: new FormControl<number>(0)

  });


  constructor(private bookingService: BookingService, private router: Router,
    private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['id'];
      if (!idString) return;

      const id = parseInt(idString, 10);
      this.bookingService.getById(id).subscribe(booking => this.loadBookingForm(booking));
    });
  }

  loadBookingForm(booking: IBooking): void {

    this.bookingForm.reset({
      id: booking.id,
      bookingDate: booking.bookingDate,
      bookingTime: booking.bookingTime,
      userId: booking.userId,
      restaurantId: booking.restaurantId,
      availability: booking.availability,
      peopleNumber: booking.peopleNumber

    });
  }
  save(): void {
    let id = this.bookingForm.get('id')?.value ?? 0;
    let bookingDate = this.bookingForm.get('bookingDate')?.value ?? new Date();
    let bookingTime = this.bookingForm.get('bookingTime')?.value ?? [];
    let userId = this.bookingForm.get('userId')?.value ?? 0;
    let restaurantId = this.bookingForm.get('restaurantId')?.value ?? 0;
    let availability = this.bookingForm.get('availability')?.value ?? true;
    let peopleNumber = this.bookingForm.get('peopleNumber')?.value ?? 0;

    // TODO añadir validación extra de datos, si alguno está mal hacer return y mostrar error y no guardar.

    let booking: IBooking = {
      id: id,
      bookingDate: bookingDate,
      bookingTime: bookingTime,
      userId: userId,
      restaurantId: restaurantId,
      availability: availability,
      peopleNumber: peopleNumber,

    }
    if (id === 0)
      this.bookingService.create(booking).subscribe(booking => this.router.navigate(['/bookings', booking.id]));
    else
      this.bookingService.update(booking).subscribe(booking => this.router.navigate(['/bookings', booking.id]));

  }


}
