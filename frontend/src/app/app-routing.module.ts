import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)
  },

    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '', redirectTo: 'restaurants', pathMatch: 'full' 
  },
  {
    path: '**', redirectTo: 'restaurants', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
