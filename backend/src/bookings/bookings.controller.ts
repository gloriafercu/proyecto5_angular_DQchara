import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.entity';

@Controller('bookings')
export class BookingsController {

    constructor(private bookingsService: BookingsService) {}

    @Get()
    getAll(): Promise<Booking[]> {
        return this.bookingsService.getAll();
    }

    @Get(':id')
    getById(@Param("id") id: number): Promise<Booking | null> {
        return this.bookingsService.getById(id);
    }

    @Get('restaurant/:restaurantId') 
    getAllBookingsByRestaurantId(@Param('restaurantId') restaurantId: number): Promise<Booking[]> {
        return this.bookingsService.getAllBookingsByRestaurantId(restaurantId);
    }

    @Get('user/:userId')
    getAllBookingsByUserId(@Param('userId') userId: number): Promise<Booking[]> {
        return this.bookingsService.getAllBookingsByUserId(userId);
    }

    @Post()
    async create(@Body() booking: Booking): Promise<Booking> {
        return await this.bookingsService.create(booking);
    }

    @Put()
    async update(@Body() booking: Booking): Promise<Booking> {
        return this.bookingsService.update(booking);
    }

    @Delete(':id')
    @HttpCode(204) 
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return await this.bookingsService.deleteById(id);
    }
}

