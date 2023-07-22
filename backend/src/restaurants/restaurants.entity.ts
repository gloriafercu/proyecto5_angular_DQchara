
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ unique: true })
    address: string;

    @Column({ type: 'text' })
    iframe: string;

    @Column()
    city: string;

    @Column()
    phone: string;

    @Column()
    web: string;

    @Column()
    email: string;

    @Column()
    averagePrice: number;

    @Column({type: 'decimal', precision: 10, scale: 1})
    rating: number;

    @Column()
    availability: boolean;

    @Column()
    typeFood: string; 

    @Column('simple-array', { nullable: true })
    photos?: string[]; // ejemplo: img1.png,img2.png,img3.png

    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;

    @UpdateDateColumn({ name: 'updated_date' })
    updatedDate: Date;

}