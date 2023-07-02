import { Pipe, PipeTransform } from '@angular/core';
import { IRestaurant } from '../restaurants/models/restaurant.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurants: IRestaurant[], ...searchArgs: string[]): IRestaurant[] {
    const [query, ...properties]: string[] = searchArgs;

    if (!this.isValidArray(restaurants)) return restaurants;
    if (!this.hasValidSearchQuery(query)) return restaurants;

    const lowerQuery = query.toLowerCase();
    return this.filterByString(restaurants, lowerQuery, properties);

  }

  private isValidArray(restaurants: IRestaurant[]): boolean {
    return Array.isArray(restaurants);
  }

  private hasValidSearchQuery(query: string): boolean {
    return !(!query || query.length < 3);
  }

  private filterByString(
    restaurants: IRestaurant[],
    lowerQuery: string,
    properties: string[]
  ): IRestaurant[] {
    return restaurants.filter((restaurant) =>
      properties
        .flat()
        .some((property) => restaurant[property].toLowerCase().includes(lowerQuery))
    );

  }

}
