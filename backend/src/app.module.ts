import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [DatabaseModule, RestaurantsModule, UsersModule, CommentsModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
