import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const routes: Routes = [

  {
    path: 'booking-list',
    component: BookingListComponent
  },
  {
    path: 'restaurant/:restaurantId',
    component: BookingFormComponent
  },
  {
    path: ':bookingId/edit',
    component: BookingFormComponent
  },
  {
    path: ':bookingId',
    component: BookingDetailComponent
  },
  
  {
    path: '', redirectTo: 'bookings', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'bookings', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
