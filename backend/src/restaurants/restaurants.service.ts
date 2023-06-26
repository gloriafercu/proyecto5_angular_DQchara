import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Restaurant } from './restaurants.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantsService {

    constructor(
        @InjectRepository(Restaurant) private restaurantRepo: Repository<Restaurant>
    ) {}

    findAll(): Promise<Restaurant[]> {
        return this.restaurantRepo.find();
    }

    async create(restaurant: Restaurant): Promise<Restaurant> {
        try {
            return await this.restaurantRepo.save(restaurant);
        } catch (error) {
            throw new ConflictException('No se ha podido guardar el restaurante')
        }
    }

    async update(restaurant: Restaurant): Promise<Restaurant> {
        let restaurantFromDB = await this.restaurantRepo.findOne({
            where: {
                id: restaurant.id
            }
        });
        if (!restaurantFromDB) throw new NotFoundException('Restaurante no encontrado');
        try {
            restaurantFromDB.name = restaurant.name;
            restaurantFromDB.address = restaurant.address;
            restaurantFromDB.city = restaurant.city;
            restaurantFromDB.phone = restaurant.phone;
            restaurantFromDB.web = restaurant.web;
            restaurantFromDB.email = restaurant.email;
            restaurantFromDB.averagePrice = restaurant.averagePrice;
            restaurantFromDB.rating = restaurant.rating;
            restaurantFromDB.availability = restaurant.availability;
            restaurantFromDB.typeFood = restaurant.typeFood;
          
          

            await this.restaurantRepo.update(restaurantFromDB.id, restaurantFromDB);
            return restaurantFromDB;

        } catch (error) {
            throw new ConflictException('Error actualizando el restaurante');
        }
    }
    async deleteById(id: number): Promise<void> {
        let exist = await this.restaurantRepo.exist({
            where: {
                id: id
            }
        });
        if (!exist) throw new NotFoundException('Not Found');
        try {
            await this.restaurantRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar')
        }
    }
}
