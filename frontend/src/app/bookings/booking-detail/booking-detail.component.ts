import { Component, OnInit } from '@angular/core';
import { IBooking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit{

  booking: IBooking | undefined;

  constructor( private activatedRoute: ActivatedRoute, private bookingService: BookingService){};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>  {
      const idString = params['id']; // extraer id de la reserva de la dirección url
      if (!idString) return; // comprueba si el id existe
      const id = parseInt(idString, 10);
      this.bookingService.getById(id).subscribe(data => this.booking = data);
    
    }); 
  }
}
