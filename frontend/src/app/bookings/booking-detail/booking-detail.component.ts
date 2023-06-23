import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { IBooking } from '../models/booking.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { IRestaurant } from 'src/app/restaurants/models/restaurant.model';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  restaurant: IRestaurant | undefined;
  booking: IBooking | undefined;

  constructor(private bookingService: BookingService, private restaurantService: RestaurantService, private activatedRoute: ActivatedRoute, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['bookingId']; // extraer id del restaurante de la dirección url
      if (!idString) return; // comprueba si el id existe
      const bookingId = parseInt(idString, 10);
      this.bookingService.getById(bookingId).subscribe(data => {

        this.booking = data;
        this.restaurantService.getById(this.booking.id).subscribe(data => this.restaurant = data);
      });
    });
  }

  // deleteById(id: number) {
  //   this.bookingService.deleteById(id).subscribe({
  //     next: response => {
  //       if (response.status === 200 || response.status === 204) {
  //         console.log("Se ha borrado correctamente.");
  //         this.router.navigate(['/restaurants']);
  //         this.ngOnInit();
  //       } else {
  //         console.log("Se ha producido un error.");
  //         this.snackbar.open('Se ha producido un error, inténtelo más tarde', 'Cerrar', { duration: 3000 });
  //       }
  //     },
  //     error: error => {
  //       console.log(error);
  //       this.snackbar.open('Se ha producido un error, inténtalo más tarde', 'Cerrar', { duration: 3000 });
  //     }
  //   });

  // }



}
