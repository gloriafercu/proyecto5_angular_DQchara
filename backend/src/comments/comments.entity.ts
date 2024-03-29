import { Restaurant } from "src/restaurants/restaurants.entity";
import { User } from "src/users/users.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";


@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 10, scale: 1 })
    rating: number;

    @Column({ type: 'text' })
    description: string;

    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;
    @UpdateDateColumn({ name: 'updated_date' })
    updatedDate: Date;

    @ManyToOne(() => Restaurant)
    @JoinColumn({ name: 'id_restaurant' })
    restaurant: Restaurant;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_user' })
    user: User;

} 