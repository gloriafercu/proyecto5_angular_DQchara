import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { BookingsModule } from './bookings/bookings.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [DatabaseModule, RestaurantsModule, UsersModule, CommentsModule, BookingsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
