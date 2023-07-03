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

    @Get('id/:id')
    getById(@Param("id") id: number): Promise<Restaurant | null> {
        return this.restaurantService.getById(id);
    }
    @Get('city/:city')
    getAllByCity(@Param('city') city: string): Promise<Restaurant[]> {
        return this.restaurantService.getALLByCity(city);
    } @Get('city/:city')

    @Get('typeFood/:typeFood')
    getAllByTypeFood(@Param('typeFood') typeFood: string): Promise<Restaurant[]> {
        return this.restaurantService.getAllByTypeFood(typeFood);
    }

    @Get('average/:averageDesc')
    getAllOrderByAverageDesc(): Promise<Restaurant[]> {
        return this.restaurantService.getAllOrderByAverageDesc();
    }

    @Post()
    async create(@Body() restaurant: Restaurant): Promise<Restaurant> {
        return await this.restaurantService.create(restaurant);
    }

    @Put()
    async update(@Body() restaurant: Restaurant): Promise<Restaurant> {
        return this.restaurantService.update(restaurant);
    }

    @Delete(':id')
    @HttpCode(204) 
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return await this.restaurantService.deleteById(id);
    }

}


