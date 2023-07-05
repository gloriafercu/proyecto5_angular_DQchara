import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/bookings/bookings.entity';
import { Comment } from 'src/comments/comments.entity';
import { Photo } from 'src/photos/photos.entity';
import { Restaurant } from 'src/restaurants/restaurants.entity';
import { User } from 'src/users/users.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
           type: 'mysql',
           host: 'localhost',
           port: 3306,
           username: 'root',
           //password: 'admin',
           password: process.env.NEST_PASSWORD,
           database: 'backend_dqchara',
           entities: [ Restaurant, User , Comment , Booking, Photo],
           synchronize: true,
           logging: true
        })
       ]
})
export class DatabaseModule {}
