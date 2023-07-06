import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private userService: UsersService) {
        super({
            // extrae el token de la header Authorization y verifica si es correcto
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.NEST_JWT_SECRET
        })
    }

    async validate(payload: any) {
        let user = await this.userService.getById(payload.sub);

        if(!user) 
            throw new UnauthorizedException('Autenticación incorrecta'); // 401

        // quitar la password por seguridad
        let {password, ...userInfo} = user; 
        return userInfo;
    }

}