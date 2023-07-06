import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './comments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from 'src/bookings/bookings.entity';

@Injectable()
export class CommentsService {

    constructor(
        @InjectRepository(Comment) private commentRepo: Repository<Comment>
    ) {}

    getById(id: number): Promise<Comment | null> {
        return this.commentRepo.findOne({
            where: { id: id }
        });
    }
    getAllByRestaurantId(restaurantId: number): Promise<Comment[]> { 
        return this.commentRepo.find({
            relations: {
                restaurant: true
            },
            where: {
                restaurant: {
                    id: restaurantId
                }
            }
        })
    }
    getAllByUserId(userId: number): Promise<Comment[]> { 
        return this.commentRepo.find({
            relations: {
                user: true
            },
            where: {
                user: {
                    id: userId
                }
            }
        })
    }
    async create(comment: Comment): Promise<Comment> {
        try {
            return await this.commentRepo.save(comment);
        } catch (error) {
            throw new ConflictException('No se ha podido guardar la opinión')
        }
    }
    async update(comment: Comment): Promise<Comment> {
        let commentFromDB = await this.commentRepo.findOne({
            where: {
                id: comment.id
            }
        });
        if (!commentFromDB) throw new NotFoundException('Opinión no encontrada');
        try {
            commentFromDB.rating = comment.rating;
            commentFromDB.description = comment.description;
          
          
            await this.commentRepo.update(commentFromDB.id, commentFromDB);
            return commentFromDB;

        } catch (error) {
            throw new ConflictException('Error actualizando la reserva');
        }
    }
    async deleteById(id: number): Promise<void> {
        let exist = await this.commentRepo.exist({
            where: {
                id: id
            }
        });
        if (!exist) throw new NotFoundException('Not Found');
        try {
            await this.commentRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar')
        }
    }
}