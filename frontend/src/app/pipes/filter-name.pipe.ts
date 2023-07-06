import { Pipe, PipeTransform } from '@angular/core';
import { IRestaurant } from '../restaurants/models/restaurant.model';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(restaurants: IRestaurant[], arg: any): IRestaurant[] {
    if (arg === '' || arg.length < 3) return restaurants;
    const filterRestaurants = [];
    for (const restaurant of restaurants) {
      if (restaurant.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        filterRestaurants.push(restaurant);
      };
    };
    return filterRestaurants;
  }

  // transform(restaurants: IRestaurant[], ...args: string[]): IRestaurant[] {
  //   const restaurantsArray = [];
  //   const searchArgs = args[0].split(' ');
  //   const searchArgsLowerCase = searchArgs.map(elem => {
  //     return elem.toLowerCase();
  //   });
  //   console.log('searchArgs', searchArgs);
  //   console.log('searchArgsLowerCase', searchArgsLowerCase);

  //   for (const restaurant of restaurants) {
  //     // const lowerQuery = restaurant.toLowerCase();
  //     const nameLowerCase = restaurant.name.toLowerCase();
  //     const cityLowerCase = restaurant.city.toLowerCase();

  //     // if (nameLowerCase.indexOf(argLowerCase1) > -1) {
  //     //   restaurantsArray.push(restaurant)
  //     // }
  //     // if (cityLowerCase.indexOf(argLowerCase1) > -1) {
  //     //   restaurantsArray.push(restaurant)
  //     // }

  //     for (let i = 0; i < searchArgsLowerCase.length; i++) {
  //       let element = searchArgsLowerCase[i]
  //       console.log(element);
  //       if ((nameLowerCase.includes(element)) &&
  //         (cityLowerCase.includes(element))) {
  //         restaurantsArray.push(restaurant)
  //         console.log(`coincide '${element}'`)
  //       }
  //     }

  //   }
  //   // console.log('restaurantsArray', restaurantsArray);

  //   return restaurantsArray;
  

}
