import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { IBooking } from '../models/booking.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  booking: IBooking | undefined;

  constructor(private bookingService: BookingService, private activatedRoute: ActivatedRoute, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['id']; // extraer id del restaurante de la dirección url
      if (!idString) return; // comprueba si el id existe
      const id = parseInt(idString, 10);
      this.bookingService.getById(id).subscribe(data => this.booking = data);
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
