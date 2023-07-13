import { Body, Request, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from 'src/users/users.entity';

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

   
    @Put(':id')
    async update(@Body() booking: Booking): Promise<Booking> {
        return this.bookingsService.update(booking);
    }

    @Delete(':id')
    @HttpCode(204) 
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return await this.bookingsService.deleteById(id);
    }
// 
    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(@Request() request): Promise<Booking[]> {

        if(request.user.role === UserRole.ADMIN)
            return this.bookingsService.getAll();

        return this.bookingsService.getAllBookingsByUserId(request.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(
        @Request() request, 
        @Body() booking: Booking): Promise<Booking> {
        console.log(request.user);
        booking.user = request.user;
        return await this.bookingsService.create(booking);
    }
}

