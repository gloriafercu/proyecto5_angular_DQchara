import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { IRestaurant } from 'src/app/restaurants/models/restaurant.model';
import { IUser } from 'src/app/users/models/user.model';

import { Router, ActivatedRoute } from '@angular/router';

import { IBooking } from '../models/booking.model';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  restaurant: IRestaurant | undefined;
  restaurants: IRestaurant[] = [];
  users: IUser[] = [];

  times: string[] = ["13:00", "14:00", "15:00", "19:00", "20:00", "21:00", "22:00"];
  numPeople: string[] = ["1 persona", "2 personas", "3 personas", "4 personas", "5 personas", "6 personas"];


  bookingForm = new FormGroup({
    // userId: new FormControl<number>(0, [Validators.required]),
    // restaurantId: new FormControl<number>(0, [Validators.required]),
    id: new FormControl<number>(0),
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    peopleNumber: new FormControl<string>('', [Validators.required]),
    bookingDate: new FormControl<Date | null>(new Date(), [Validators.required]),
    bookingTime: new FormControl<string>('', [Validators.required]),
    notes: new FormControl<string>('', [Validators.maxLength(300)]),
    phone: new FormControl<string>('', [Validators.required, Validators.pattern('^[679]{1}[0-9]{8}$')]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    restaurantId: new FormControl<number>(0)
  });


  constructor(
    private bookingService: BookingService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // const idBookingStr = params['bookingId']; // extraer id de la dirección
      // if (!idBookingStr) return; // comprueba si el id existe
      // const bookingId = parseInt(idBookingStr, 10);
      // console.log('bookingId', bookingId)
      const idRestStr = params['restaurantId']; // extraer id de la dirección
      if (!idRestStr) return; // comprueba si el id existe
      const restaurantId = parseInt(idRestStr, 10); // si el id existe parsea el id a número en base decimal
      console.log('restId', restaurantId);

      this.restaurantService.getById(restaurantId).subscribe(data => {
        this.restaurant = data;
        console.log('datos restaurant', data)
      });

      // this.bookingService.getAllByRestaurantId(restaurantId).subscribe(data=> {
      //   console.log('data getAllbyRestaurantId', data);

      //   // this.loadBookingForm(booking)
      // });

    });


  //   const idString = params['id']; // extraer id de la dirección
  //     if (!idString) return; // comprueba si el id existe

  //     const id = parseInt(idString, 10); // si el id existe parsea el id a número en base decimal
  //     this.bookingService.getById(id).subscribe(booking => this.loadBookingForm(booking));
 }


  // cargar una reserva en el formulario para editarla
  loadBookingForm(booking: IBooking): void {
    this.bookingForm.reset({
      id: booking.id,
      firstName: booking.firstName,
      lastName: booking.lastName,
      peopleNumber: booking.peopleNumber,
      bookingTime: booking.bookingTime,
      bookingDate: booking.bookingDate,
      notes: booking.notes,
      phone: booking.phone,
      email: booking.email,
      restaurantId: booking.restaurantId
    });

  }

  save(): void {

    // TODO añadir validación extra de datos, si alguno está mal hacer return y mostrar error y no guardar.
    let id = this.bookingForm.get('id')?.value ?? 0;
    let firstName = this.bookingForm.get('firstName')?.value ?? '';
    let lastName = this.bookingForm.get('lastName')?.value ?? '';
    let peopleNumber = this.bookingForm.get('peopleNumber')?.value ?? '';
    let bookingTime = this.bookingForm.get('bookingTime')?.value ?? '';
    let bookingDate = this.bookingForm.get('bookingDate')?.value ?? new Date();
    let notes = this.bookingForm.get('notes')?.value ?? '';
    let phone = this.bookingForm.get('phone')?.value ?? '';
    let email = this.bookingForm.get('email')?.value ?? '';
    let restaurantId = this.restaurant?.id ?? 0;

    let booking: IBooking = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      peopleNumber: peopleNumber,
      bookingTime: bookingTime,
      bookingDate: bookingDate,
      notes: notes,
      phone: phone,
      email: email,
      restaurantId: restaurantId,
    }

    console.log('save booking', booking);

    if (id === 0)
      this.bookingService.create(booking).subscribe(booking => this.router.navigate(['/bookings', booking.id]));
    else
      this.bookingService.update(booking).subscribe(booking => {
        this.router.navigate(['/bookings/restaurant', this.restaurant?.id, 'edit']);
        this.router.navigate(['/bookings', booking.id]);
      });
  }


}
