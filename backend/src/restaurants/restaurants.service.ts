import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Restaurant } from './restaurants.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';


@Injectable()
export class RestaurantsService {

    constructor(@InjectRepository(Restaurant) private restaurantRepo: Repository<Restaurant>) { }

    getAll(): Promise<Restaurant[]> {
        return this.restaurantRepo.find();
    }

    getById(id: number): Promise<Restaurant | null> {
        return this.restaurantRepo.findOne({
            where: { id: id }
        });
    }

    getAllByCity(city: string): Promise<Restaurant[]> {
        return this.restaurantRepo.find({
            where: { city: city }
        });
    }
    getAllByTypeFood(typeFood: string): Promise<Restaurant[]> {
        return this.restaurantRepo.find({
            where: { typeFood: typeFood }
        });
    }

    getAllOrderByRating(rating): Promise<Restaurant[]> {
        return this.restaurantRepo.find({
            order: { rating: rating }
        })
    }

    getAllOrderByAverage(averagePrice): Promise<Restaurant[]> {
        return this.restaurantRepo.find({
            order: { averagePrice: averagePrice}
        })
    }

    getAllByNameLike(name: string): Promise<Restaurant[]> {
        return this.restaurantRepo.find({
            where: {
                name: ILike(`%${name}%`) // contenga una palabra
            }
        })
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
        if (!restaurantFromDB) throw new NotFoundException('Restaurante no encontrado'); // 404
        try {
            restaurantFromDB.name = restaurant.name;
            restaurantFromDB.address = restaurant.address;
            restaurantFromDB.iframe = restaurant.iframe;
            restaurantFromDB.city = restaurant.city;
            restaurantFromDB.phone = restaurant.phone;
            restaurantFromDB.web = restaurant.web;
            restaurantFromDB.email = restaurant.email;
            restaurantFromDB.averagePrice = restaurant.averagePrice;
            restaurantFromDB.rating = restaurant.rating;
            restaurantFromDB.availability = restaurant.availability;
            restaurantFromDB.typeFood = restaurant.typeFood;
            restaurantFromDB.photos = restaurant.photos;

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
        if (!exist) throw new NotFoundException('Not Found'); //404
        try {
            await this.restaurantRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar')
        }
    }
}
