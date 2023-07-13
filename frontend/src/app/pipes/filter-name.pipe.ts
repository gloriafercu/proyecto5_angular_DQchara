import { Pipe, PipeTransform } from '@angular/core';
import { IRestaurant } from '../restaurants/models/restaurant.model';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(restaurants: IRestaurant[], arg: any): IRestaurant[] {
    if (arg === '' || arg.length < 3) return restaurants;
    const filterRestaurants: IRestaurant[] = [];
    for (const restaurant of restaurants) {
      if (restaurant.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        filterRestaurants.push(restaurant);
      };
    };
    return filterRestaurants;
  }

}
