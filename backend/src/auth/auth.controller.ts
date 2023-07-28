import { Body, Controller, Get, Post, UseGuards, Request, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { TokenDTO} from './dto/token.dto';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDTO } from './dto/register.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from 'src/users/users.service';


@Controller('auth')
export class AuthController {

    constructor(private userService: UsersService, private authService: AuthService) { }

    @Post('login')
    async login(@Body() login: LoginDto): Promise<TokenDTO> {
        console.log(login);
        return this.authService.login(login);
    }

  
    @Post('register')
    async register(@Body() register: RegisterDTO): Promise<TokenDTO> {
        return this.authService.register(register);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() request) {
        console.log('getProfile');
        console.log(request.user);
        return request.user
    }

        // avatar (se puede separar a un nuevo controlador FilesController o AvatarController)
        @UseGuards(AuthGuard('jwt'))
        @Post('avatar') // se puede separar en un avatar.controller.ts para mas archivos
        @UseInterceptors(FileInterceptor('file'))
        async uploadAvatar( @Request() request , @UploadedFile() file: Express.Multer.File){
            console.log(file);
    
            request.user.avatar = file.filename;
            console.log(request.user);
            let user = await this.userService.updateAvatar(request.user);
    
            return await this.authService.generateToken(user);
    }
}