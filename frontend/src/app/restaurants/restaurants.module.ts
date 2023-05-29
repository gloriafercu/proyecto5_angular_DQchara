import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';


@NgModule({
  declarations: [
    RestaurantListComponent,
    RestaurantDetailComponent, 
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    RestaurantListComponent,
    RestaurantDetailComponent
  ]
})
export class RestaurantsModule { }
