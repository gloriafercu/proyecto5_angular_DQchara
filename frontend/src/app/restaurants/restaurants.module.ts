import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { SearchBarComponent } from '../cover-view/search-bar/search-bar.component';
import { PaginatePipe } from '../pipes/paginate.pipe';
import { CoverViewModule } from '../cover-view/cover-view.module';



@NgModule({
  declarations: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    CoverViewModule,
    RestaurantsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule
   
  ],
  exports: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent
  ]
})
export class RestaurantsModule { }
