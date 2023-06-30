import { Photo } from "src/photos/photos.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    typeFood: string; //Saber si hay que ponerlo como la entidad photos

    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;

    @UpdateDateColumn({ name: 'updated_date' })
    updatedDate: Date;

    @ManyToOne(()=> Photo)
    @JoinColumn({name: 'id_photo'})
    photo: Photo;
}