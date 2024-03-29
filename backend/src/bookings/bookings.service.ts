import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Booking } from './bookings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {

    constructor(@InjectRepository(Booking) private bookingRepo: Repository<Booking>) { }

    getAll(): Promise<Booking[]> {
        return this.bookingRepo.find({
            relations: {
                restaurant: true
            }
        });
    }

    getById(id: number): Promise<Booking | null> {
        return this.bookingRepo.findOne({
            relations: {
                restaurant: true
            },
            where: { id: id }
        });
    }

    getAllBookingsByRestaurantId(restaurantId: number): Promise<Booking[]> {
        return this.bookingRepo.find({
            relations: {
                restaurant: true
            },
            where: {
                restaurant: {
                    id: restaurantId
                }
            }
        });
    }

    // devuelve un array con las reservas
    getAllBookingsByRestaurantIdAndBookingDate(restaurantId: number, bookingDate: Date): Promise<Booking[]> {
        return this.bookingRepo.find({
            relations: {
                restaurant: true
            },
            where: {
                restaurant: {
                    id: restaurantId
                },
                bookingDate: bookingDate,

            }
        });
    }

    // Devuelve el número de reservas
    countBookingsByRestaurantIdAndBookingDate(restaurantId: number, bookingDate: Date): Promise<number> {
        return this.bookingRepo.count({
            where: {
                restaurant: {
                    id: restaurantId
                },
                bookingDate: bookingDate,

            }
        });
    }

    // devuelve si hay (true) o no hay (false) alguna reserva
    async existAnyBooking(restaurantId: number, bookingDate: Date): Promise<boolean>{
        let numero_reservas = await this.countBookingsByRestaurantIdAndBookingDate(restaurantId, bookingDate);
        return numero_reservas > 0;
    }

    getAllBookingsByUserId(userId: number): Promise<Booking[]> {
        return this.bookingRepo.find({
            relations: {
                user: true,
                restaurant: true
            },
            where: {
                user: {
                    id: userId
                }
            }
        });
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

            console.log('ESTA RESERVA', booking);

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
