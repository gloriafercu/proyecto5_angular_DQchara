import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { UsersModule } from '../users/users.module';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { PaginatePipe } from '../pipes/paginate.pipe';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SafePipe } from '../pipes/safe.pipe';
import { FilterNamePipe } from '../pipes/filter-name.pipe';
import { SharedModule } from '../shared/shared.module';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantFormImagesComponent } from './restaurant-form-images/restaurant-form-images.component';



@NgModule({
  declarations: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent,
    PaginatePipe,
    SafePipe,
    FilterNamePipe,
    RestaurantFormImagesComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    UsersModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgbRatingModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent
  ]
})
export class RestaurantsModule { }
