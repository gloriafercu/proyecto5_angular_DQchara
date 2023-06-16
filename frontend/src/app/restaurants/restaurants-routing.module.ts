import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { BookingFormComponent } from '../bookings/booking-form/booking-form.component';

const routes: Routes = [
  {
    path: '', 
    component: RestaurantListComponent
  },
  {
    path: ':id', 
    component: RestaurantDetailComponent
  },
  { 
    path:'restaurants/bookings',
    component: BookingFormComponent
  },
  {
    path: '**', redirectTo:'', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
