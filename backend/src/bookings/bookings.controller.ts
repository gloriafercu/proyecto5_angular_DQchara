import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.entity';

@Controller('bookings')
export class BookingsController {

    constructor(private bookingsService: BookingsService) {}

    @Get('id/:id')
    getById(@Param("id") id: number): Promise<Booking | null> {
        return this.bookingsService.getById(id);
    }

    @Get('restaurant/:id') // preguntar
    getAllByRestaurantId(@Param('restaurantId') restaurantId: number): Promise<Booking[]> {
        return this.bookingsService.getAllByRestaurantId(restaurantId);
    }

    @Get('user/:id') // preguntar
    getAllByUserId(@Param('userId') userId: number): Promise<Booking[]> {
        return this.bookingsService.getAllByUserId(userId);
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
}
