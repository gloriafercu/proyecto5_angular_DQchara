import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

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
    @Column({ length: 11 })
    phone: string;
    @Column()
    email: string;
    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;
    @UpdateDateColumn({ name: 'updated_date' })
    updatedDate: Date;
}