import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Booking } from './bookings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {

    constructor(
        @InjectRepository(Booking) private bookingRepo: Repository<Booking>
    ) {}

    getById(id: number): Promise<Booking | null> {
        return this.bookingRepo.findOne({
            where: { id: id }
        });
    }
    getAllByRestaurantId(restaurantId: number): Promise<Booking[]> { 
        return this.bookingRepo.find({
            relations: {
                restaurant: true
            },
            where: {
                restaurant: {
                    id: restaurantId
                }
            }
        })
    }
    getAllByUserId(userId: number): Promise<Booking[]> {
        return this.bookingRepo.find({
            relations: {
                user: true
            },
            where: {
                user: {
                    id: userId
                }
            }
        })
    }
    async create(booking: Booking): Promise<Booking> {
        try {
            return await this.bookingRepo.save(booking);
        } catch (error) {
            throw new ConflictException('No se ha podido guardar la reserva')
        }
    }
    async update(booking: Booking): Promise<Booking> {
        let bookingFromDB = await this.bookingRepo.findOne({
            where: {
                id: booking.id
            }
        });
        if (!bookingFromDB) throw new NotFoundException('Reserva no encontrada');
        try {
            bookingFromDB.firstName = booking.firstName;
            bookingFromDB.lastName = booking.lastName;
            bookingFromDB.peopleNumber = booking.peopleNumber;
            bookingFromDB.bookingDate = booking.bookingDate;
            bookingFromDB.bookingTime = booking.bookingTime;
            bookingFromDB.notes = booking.notes;
            bookingFromDB.phone = booking.phone;
            bookingFromDB.email = booking.email;
          
            await this.bookingRepo.update(bookingFromDB.id, bookingFromDB);
            return bookingFromDB;

        } catch (error) {
            throw new ConflictException('Error actualizando la reserva');
        }
    }
    async deleteById(id: number): Promise<void> {
        let exist = await this.bookingRepo.exist({
            where: {
                id: id
            }
        });
        if (!exist) throw new NotFoundException('Reserva no encontrada');
        try {
            await this.bookingRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar la reserva')
        }
    }
}
