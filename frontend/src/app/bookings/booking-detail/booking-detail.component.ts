import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { IBooking } from '../models/booking.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { IRestaurant } from 'src/app/restaurants/models/restaurant.model';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  restaurant: IRestaurant | undefined;
  booking: IBooking | undefined;


  constructor(
    private bookingService: BookingService,
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    config: NgbModalConfig,
    private modalService: NgbModal) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['bookingId']; // extraer id del restaurante de la dirección url
      if (!idString) return; // comprueba si el id existe
      const bookingId = parseInt(idString, 10);
      if (!bookingId) return;
      this.bookingService.getById(bookingId).subscribe(data => {
        this.booking = data;
        this.restaurantService.getById(this.booking.restaurantId).subscribe(data =>
          this.restaurant = data);
      });
    });
  }



  deleteBooking(booking: IBooking) {
    this.bookingService.deleteById(booking.id).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/restaurants']);
      },
      error: error => {
        console.log(error);
        this.snackbar.open('Se ha producido un error, inténtelo más tarde', 'Cerrar', { duration: 3000 });
      }
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }

}




