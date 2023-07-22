import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurants.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[  MulterModule.register({
    storage: diskStorage({  
      destination: './uploads',
      filename: (req, file, callback) => {
        let fileName = uuidv4() + extname(file.originalname);
        callback(null, fileName);
      }
    })
  }),
    TypeOrmModule.forFeature([Restaurant]),
    UsersModule],
  controllers: [RestaurantsController],
  providers: [RestaurantsService]
})
export class RestaurantsModule {}
