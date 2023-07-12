import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurants.entity';

@Controller('restaurants')
export class RestaurantsController {

    constructor(private restaurantService: RestaurantsService) {}

    @Get()
    getAll(): Promise<Restaurant[]> {
        return this.restaurantService.getAll();
    }

    @Get(':id')
    getById(@Param("id") id: number): Promise<Restaurant | null> {
        return this.restaurantService.getById(id);
    }
    
    @Get('city/:city')
    getAllByCity(@Param('city') city: string): Promise<Restaurant[]> {
        return this.restaurantService.getAllByCity(city);
    } 
    
    @Get('typeFood/:typeFood')
    getAllByTypeFood(@Param('typeFood') typeFood: string): Promise<Restaurant[]> {
        return this.restaurantService.getAllByTypeFood(typeFood);
    }

    @Get('averagePrice/:averagePrice')
    getAllOrderByAverage(@Param('averagePrice') averagePrice: string): Promise<Restaurant[]> {
        return this.restaurantService.getAllOrderByAverage(averagePrice);
    }

    @Get('rating/:rating')
    getAllOrderByRating(@Param('rating') rating: string): Promise<Restaurant[]> {
        return this.restaurantService.getAllOrderByRating(rating);
    }

    @Get('name-like/:name') 
    getAllByNameLike(@Param('name') name: string): Promise<Restaurant[]> {
        return this.restaurantService.getAllByNameLike(name);
    }

    @Post()
    async create(@Body() restaurant: Restaurant): Promise<Restaurant> {
        return await this.restaurantService.create(restaurant);
    }

    @Put()
    async update(@Body() restaurant: Restaurant): Promise<Restaurant> {
        return await this.restaurantService.update(restaurant);
    }

    @Delete(':id')
    @HttpCode(204) 
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return await this.restaurantService.deleteById(id);
    }

}


