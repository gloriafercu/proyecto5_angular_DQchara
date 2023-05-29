import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';


@NgModule({
  declarations: [
    RestaurantListComponent,
    RestaurantDetailComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ]
})
export class RestaurantsModule { }
