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
