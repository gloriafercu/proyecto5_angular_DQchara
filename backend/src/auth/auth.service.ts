import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';
import { User } from 'src/users/users.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async login(login: LoginDto): Promise<TokenDto> {
        let user = await this.userService.getByEmail(login.email);
        if (!user) throw new UnauthorizedException('Credenciales incorrectas');

 

        if (!bcrypt.compareSync(login.password, user.password))
            throw new UnauthorizedException('Credenciales incorrectas');

        //Crear un token y devolverlo

        let payload = { 
            email: user.email,
            sub: user.id,
            role: user.role
        }

        let token: TokenDto = {
            token: await this.jwtService.signAsync(payload)
        }

        return token;
    }

    async register(user: User): Promise<TokenDto> {
        
        let loginDto: LoginDto = {
            email: user.email,
            password: user.password //contraseña original
        }
        //cifrar contrazeñas
        user.password = bcrypt.hashSync(user.password, 10);
        await this.userService.create(user);


        return await this.login(loginDto);
    }

}