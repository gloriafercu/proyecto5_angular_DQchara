import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
@Module({
  imports: [
    UsersModule,
    MulterModule.register({
      storage: diskStorage({
        // carpeta destino donde se guardarán los archivos interceptados en los controladores
        destination: './uploads',
        // definir cómo se genera el nombre del archivo antes de guardarlo en la carpeta uploads
        filename: (req, file, callback) => {
          let fileName = uuidv4() + extname(file.originalname);
          callback(null, fileName);
        }
      })
    }),
    PassportModule,
    JwtModule.register({
      secret: process.env.NEST_JWT_SECRET,
      signOptions:{expiresIn: '7d'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule {}
