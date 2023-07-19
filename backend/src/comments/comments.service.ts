import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from './comments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class CommentsService {

    constructor(@InjectRepository(Comment) private commentRepo: Repository<Comment>) { }

    getAll(): Promise<Comment[]> {
        return this.commentRepo.find();
    }

    getById(id: number): Promise<Comment | null> {
        return this.commentRepo.findOne({
            where: { id: id }
        });
    }

    getAllCommentsByRestaurantId(restaurantId: number): Promise<Comment[]> {
        // let ratingsArray = this.comments.map(comment => comment.rating);
        // ratingsArray = ratingsArray.map(i => Number(i)); // Array de strings lo pasamos a numbers
        // let averageValue = ratingsArray.reduce((acc, rate) => acc + rate, 0) / ratingsArray.length;
        // this.average = parseFloat(averageValue.toFixed(1));

        return this.commentRepo.find({
            relations: {
                restaurant: true,
                user: true
            },
            where: {
                restaurant: {
                    id: restaurantId
                }
            }
        });
    }


    // async getAverageByRestaurantId(restaurantId: number): Promise<number> {
    //     const resultArray = await this.commentRepo.query(`SELECT avg(rating) as avg FROM backend_dqchara.comment where id_restaurant=${restaurantId}`);
    //     return resultArray.map(result => result.avg)

    // }
    async getAverageByRestaurantId(restaurantId: number): Promise<number>{
        const commentsByRestId = await this.getAllCommentsByRestaurantId(restaurantId);
        let ratingsArray = commentsByRestId.map(comment => comment.rating);
        ratingsArray = ratingsArray.map(i => Number(i)); // Array de strings lo pasamos a numbers
        let averageValue = ratingsArray.reduce((acc, rate) => acc + rate, 0) / ratingsArray.length;
         const average = parseFloat(averageValue.toFixed(1));
         return average;

    }

    getAllCommentsByUserId(userId: number): Promise<Comment[]> {
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
