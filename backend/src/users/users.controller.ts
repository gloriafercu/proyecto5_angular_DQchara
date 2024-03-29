import { Body, Controller, Request, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UseGuards, UnauthorizedException, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserRole } from './users.entity';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { };

    @Get('')
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }


    @UseGuards(AuthGuard('jwt'))
    @Get('current')
    findCurrentUser(@Request() request): Promise<User> {
        console.log('request user', request.user)
        return request.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    async update(@Request() request, @Body() user: User): Promise<User> {

        // si el id de request.user.id no coincide con user.id
        console.log(request.user);
        console.log(user);
        if (request.user.id !== user.id &&
            request.user.role !== UserRole.ADMIN)
            throw new UnauthorizedException('No se puede editar');

        return await this.userService.update(user);
        // TODO: en caso de actualizar datos que están en el token JWT será necesario
        // crear un nuevo token JWT y devolverlo para que se actualice en frontend
    }


}