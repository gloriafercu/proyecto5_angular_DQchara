import { Body, Controller, Request, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comments.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from 'src/users/users.entity';


@Controller('comments')
export class CommentsController {

    constructor(private commentsService: CommentsService) { }

    // @Get()
    // getAll(): Promise<Comment[]> {
    //     return this.commentsService.getAll();
    // }

    @Get(':id')
    getById(@Param("id") id: number): Promise<Comment | null> {
        return this.commentsService.getById(id);
    }

    @Get('restaurantId/:restaurantId')
    getAllCommentsByRestaurantId(@Param('restaurantId') restaurantId: number): Promise<Comment[]> {
        return this.commentsService.getAllCommentsByRestaurantId(restaurantId);
    }

    // @Get('userId/:userId')
    // getAllCommentsByUserId(@Param('userId') userId: number): Promise<Comment[]> {
    //     return this.commentsService.getAllCommentsByUserId(userId);
    // }

    @Get('average/:restaurantId')
    getAverageByRestaurantId(@Param('restaurantId') restaurantId: number): Promise<number> {
        let average= this.commentsService.getAverageByRestaurantId(restaurantId);
                 // TDOO actualizar restaurante con avegare antes de devolverlo
            // this.restaurantService.update(restaurant);
                 return average;
    }

    // @Post()
    // async create(@Body() comment: Comment): Promise<Comment> {
    //     return await this.commentsService.create(comment);
    // }

    @Put()
    async update(@Body() comment: Comment): Promise<Comment> {
        return this.commentsService.update(comment);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.commentsService.deleteById(id);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAll(@Request() request): Promise<Comment[]> {

        if (request.user.role === UserRole.ADMIN) {
            return this.commentsService.getAll();
        } else if (request.user.role === UserRole.REST) {
            return this.commentsService.getAllCommentsByRestaurantId(request.restaurant.id);
        } else {
            return this.commentsService.getAllCommentsByUserId(request.user.id);
        }

    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(
        @Request() request,
        @Body() comment: Comment): Promise<Comment> {
        console.log(request.user);
        comment.user = request.user;
        return await this.commentsService.create(comment);
    }
}