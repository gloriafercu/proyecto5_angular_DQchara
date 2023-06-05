import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  {
    path: '', 
    component: RestaurantListComponent
  },
  {
    path: ':restaurantId', 
    component: RestaurantDetailComponent
  },
  {
    path: '**', redirectTo:'/restaurant-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
