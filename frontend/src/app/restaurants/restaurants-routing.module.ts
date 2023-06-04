import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  {
    path: '', // pagina home / pagina de inicio
    component: RestaurantListComponent
  },
  {
    path: ':restaurantId', //los : son para algo dinamico
    component: RestaurantDetailComponent
  },
  {
    path: '**', redirectTo:'/restaurant-list', pathMatch: 'full' //redireccion para paginas que no existen
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
