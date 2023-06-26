import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    rating: number;
    @Column()
    description: string;
    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;
    @UpdateDateColumn({ name: 'updated_date' })
    updatedDate: Date;

} 