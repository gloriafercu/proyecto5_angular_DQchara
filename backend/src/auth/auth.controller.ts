import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/users.entity';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() login: LoginDto): Promise<TokenDto> {
        return this.authService.login(login);
    }

    @Post('register')
    async register(@Body() user: User): Promise<TokenDto> {
        return this.authService.register(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() request) {
        console.log('getProfile');
        console.log(request.user);
        return request.user
    }
}