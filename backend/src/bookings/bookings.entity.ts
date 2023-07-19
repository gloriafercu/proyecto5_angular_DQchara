import { Restaurant } from "src/restaurants/restaurants.entity";
import { User } from "src/users/users.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    firstName: string;

    @Column({ length: 15 })
    lastName: string;

    @Column()
    peopleNumber: string;

    @Column()
    bookingDate: Date;

    @Column()
    bookingTime: string;

    @Column()
    notes: string;

    @Column({ length: 9 })
    phone: string;

    @Column()
    email: string;

    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;

    @UpdateDateColumn({ name: 'updated_date' })
    updatedDate: Date;

    @ManyToOne(() => Restaurant)
    @JoinColumn({ name: 'id_restaurant' })
    restaurant: Restaurant;
    
    @ManyToOne(()=> User)
    @JoinColumn({name: 'id_user'})
    user: User;

}