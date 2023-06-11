import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatTabsModule} from '@angular/material/tabs';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { PaginatePipe } from '../pipes/paginate.pipe';


@NgModule({
  declarations: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent, 
    PaginatePipe
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTabsModule
   
  ],
  exports: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent
  ]
})
export class RestaurantsModule { }
