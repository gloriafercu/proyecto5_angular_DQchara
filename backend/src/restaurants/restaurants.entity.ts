import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column()
    address: string;

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

    @Column()
    rating: number;

    @Column()
    availability: boolean;

    @Column()
    typeFood: string;

    @Column()
    images: [];

    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;

    @UpdateDateColumn({ name: 'updated_date' })
    updatedDate: Date;

}