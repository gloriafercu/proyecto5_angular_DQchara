import { RestaurantsController } from "src/restaurants/restaurants.controller";
import { Restaurant } from "src/restaurants/restaurants.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
    REST = 'rest'

}
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20, nullable: true })
    firstName?: string;

    @Column({ length: 30, nullable: true })
    lastName?: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    password?: string;

    @Column({ length: 9, nullable: true })
    phone?: string;

    @Column({ unique: true })
    userName: string;

    @Column({ nullable: true })
    avatar?: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER, nullable: true
    })
    role?: UserRole;

    @CreateDateColumn({ name: 'created_date', nullable: true })
    createdDate?: Date;

    @UpdateDateColumn({ name: 'updated_date', nullable: true })
    updatedDate?: Date;

    @OneToOne(() => Restaurant,
        { nullable: true, cascade: true, eager: true })
    @JoinColumn({ name: 'id_restaurant' })
    restaurant: Restaurant;

    
}   