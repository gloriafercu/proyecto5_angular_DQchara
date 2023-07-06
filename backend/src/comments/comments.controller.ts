import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comments.entity';

@Controller('comments')
export class CommentsController {

    constructor(private commentsService: CommentsService) {}

    @Get('id/:id')
    getById(@Param("id") id: number): Promise<Comment | null> {
        return this.commentsService.getById(id);
    }

    @Get('restaurant/:id') // preguntar
    getAllByRestaurantId(@Param('restaurantId') restaurantId: number): Promise<Comment[]> {
        return this.commentsService.getAllByRestaurantId(restaurantId);
    }

    @Get('user/:id') // preguntar
    getAllByUserId(@Param('userId') userId: number): Promise<Comment[]> {
        return this.commentsService.getAllByUserId(userId);
    }

    @Post()
    async create(@Body() comment: Comment): Promise<Comment> {
        return await this.commentsService.create(comment);
    }

    @Put()
    async update(@Body() comment: Comment): Promise<Comment> {
        return this.commentsService.update(comment);
    }

    @Delete(':id')
    @HttpCode(204) 
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return await this.commentsService.deleteById(id);
    }
}