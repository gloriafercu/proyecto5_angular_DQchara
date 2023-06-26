import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/bookings/bookings.entity';
import { Comment } from 'src/comments/comments.entity';
import { Restaurant } from 'src/restaurants/restaurants.entity';
import { User } from 'src/users/users.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
           type: 'mysql',
           host: 'localhost',
           port: 3306,
           username: 'root',
           password: 'admin',
           database: 'backend_dqchara',
           entities: [ Restaurant, User , Comment , Booking],
           synchronize: true,
           logging: true
        })
       ]
})
export class DatabaseModule {}
