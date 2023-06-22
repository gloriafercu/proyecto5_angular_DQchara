import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

const routes: Routes = [
  {
    path: 'restaurant/:restaurantId',
    component: BookingFormComponent
  },
  {
    path: ':id',
    component: BookingDetailComponent
  },
  {
    path: ':id/edit',
    component: BookingFormComponent
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
