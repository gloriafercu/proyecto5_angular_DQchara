import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[ TypeOrmModule.forFeature([Booking])],
  controllers: [BookingsController],
  providers: [BookingsService]
})
export class BookingsModule {}
