import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';

import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  declarations: [
    BookingFormComponent,
    BookingDetailComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    BookingFormComponent,
    BookingDetailComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ]
})
export class BookingsModule { }
