import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { TokenDTO} from './dto/token.dto';
import { User, UserRole } from 'src/users/users.entity';
import * as bcrypt from 'bcryptjs';
import { RegisterDTO } from './dto/register.dto';


@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async login(login: LoginDto): Promise<TokenDTO> {

        let user = await this.userService.getByEmail(login.email);

        if (!user) throw new UnauthorizedException('Credenciales incorrectas'); // 401

        // comprobar contraseña cifrada:
        if (!bcrypt.compareSync(login.password, user.password))
            throw new UnauthorizedException('Credenciales incorrectas'); // 401

        // Crear un token y devolverlo
        let payload = {
            userName: user.userName,
            email: user.email,
            avatar: user.avatar,
            sub: user.id,
            role: user.role
        }

        let token: TokenDTO = {
            token: await this.jwtService.signAsync(payload)
        }

        return token;
    }

   
    async register(register: RegisterDTO): Promise<TokenDTO> {

        let loginDTO: LoginDto = {
            email: register.email,
            password: register.password
        }
        
        //Crear Usuario
        let user = new User();
        user.userName = register.userName;
        user.email = register.email;
        // cifrar contraseña bcrypt
        user.password = bcrypt.hashSync(register.password, 10); // contraseña cifrada
        user.role = register.isRestaurant ? UserRole.REST : UserRole.USER;

        await this.userService.create(user);

        return await this.login(loginDTO);
    }

}