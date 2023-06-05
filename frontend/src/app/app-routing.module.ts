import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'restaurants', // pagina home / pagina de inicio
  loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)
},

{
  path: '', redirectTo:'restaurants', pathMatch: 'full' // redireccion a pag principal
},
{
  path: '**', redirectTo:'restaurants', pathMatch: 'full' //redireccion para paginas que no existen
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
