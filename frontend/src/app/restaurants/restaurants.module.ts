import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';


@NgModule({
  declarations: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent, 
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule
  ],
  exports: [
    RestaurantListComponent,
    RestaurantDetailComponent
  ]
})
export class RestaurantsModule { }
