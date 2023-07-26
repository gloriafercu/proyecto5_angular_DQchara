import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantFormImagesComponent } from './restaurant-form-images/restaurant-form-images.component';


const routes: Routes = [
  {
    path: '',
    component: RestaurantListComponent
  },
  {
    path: 'my-restaurant',
    component: RestaurantFormComponent
  },
  {
    path: 'my-restaurant/:restaurantId/edit',
    component: RestaurantFormComponent
  },
  
  {
    path: 'my-restaurant/:restaurantId/photos',
    component: RestaurantFormImagesComponent
  },
  {
    path: ':id',
    component: RestaurantDetailComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
