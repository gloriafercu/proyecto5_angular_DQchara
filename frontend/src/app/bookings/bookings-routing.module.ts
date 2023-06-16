import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [
  {
    path: '',
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
