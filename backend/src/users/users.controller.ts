import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get(':id')
    getById(@Param("id") id: number): Promise<User | null> {
        return this.userService.getById(id);
    }

    @Get('email/:email')
    getByEmail(@Param("email") email: string): Promise<User | null> {
        return this.userService.getByEmail(email);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.userService.create(user);
    }

    @Put()
    async update(@Body() user: User): Promise<User> {
        return await this.userService.update(user);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.userService.deleteById(id);
    }


}
