import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    alt: string;

}    