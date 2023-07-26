import { Body, Controller, Request, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UnauthorizedException, UseGuards, NotFoundException, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurants.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from 'src/users/users.entity';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UsersService } from 'src/users/users.service';

@Controller('restaurants')
export class RestaurantsController {

    constructor(private restaurantService: RestaurantsService, private usersService: UsersService) { }

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

    
    @UseGuards(AuthGuard('jwt'))
    @Get('my-restaurant')
    findRestaurantByAuthenticatedUser(@Request() request): Promise<Restaurant | null> {
        // comprobar si no es rest se termina el método
        if (request.user.role !== UserRole.REST)
            throw new UnauthorizedException('Cant find restaurant');

        console.log(request.user);
        return request.user.restaurant;
    }

    @Put(':id')
    async update(@Body() restaurant: Restaurant): Promise<Restaurant> {
        return await this.restaurantService.update(restaurant);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.restaurantService.deleteById(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Request() request, @Body() restaurant: Restaurant): Promise<Restaurant> {

        if (request.user.role === UserRole.ADMIN)
            return await this.restaurantService.create(restaurant);


        if (request.user.role === UserRole.REST) {
            restaurant = await this.restaurantService.create(restaurant);

            request.user.restaurant = restaurant;
            await this.usersService.update(request.user);
            return restaurant;
        }

        throw new UnauthorizedException('Cant create restaurant');
    }


    // http://localhost:3000/restaurants/2/images
    @UseGuards(AuthGuard('jwt'))
    @Post(':restaurantId/photos')
    @UseInterceptors(FilesInterceptor('file'))
    async uploadRestaurantImages(
        @Request() request,
        @Param('restaurantId', ParseIntPipe) restaurantId: number,
        @UploadedFiles() files: Express.Multer.File[]
    ) {
        // obtener el restaurante y si no existe lanzar excepción
        let restaurant = await this.restaurantService.getById(restaurantId);
        console.log('upload', restaurant);
        if (!restaurant) throw new NotFoundException('Restaurant not found');

        // asociar los nombres de los archivos en el atributo images del objeto restaurante
        restaurant.photos = [];
        files.forEach(file => restaurant.photos.push(file.filename));

        // guardar el restaurante en base de datos
        return await this.restaurantService.update(restaurant);
    }


}


