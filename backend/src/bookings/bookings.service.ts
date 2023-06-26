import { Injectable } from '@nestjs/common';
import { Booking } from './bookings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {

    constructor(
        @InjectRepository(Booking) private bookingRepo: Repository<Booking>
    ) {}
}
