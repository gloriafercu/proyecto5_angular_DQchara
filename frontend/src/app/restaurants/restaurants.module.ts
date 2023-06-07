import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';


import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';


@NgModule({
  declarations: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent 
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    MatCardModule,
    MatGridListModule
   
  ],
  exports: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent
  ]
})
export class RestaurantsModule { }
