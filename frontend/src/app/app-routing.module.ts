import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'restaurants', // pagina home / pagina de inicio
  loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)
},

{
  path: '', redirectTo:'books', pathMatch: 'full' // redireccion a pag principal
},
{
  path: '**', redirectTo:'books', pathMatch: 'full' //redireccion para paginas que no existen
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
