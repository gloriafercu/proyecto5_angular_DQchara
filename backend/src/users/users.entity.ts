import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 10 })
    firstName: string;
    @Column({ length: 15 })
    lastName: string;
    @Column({ unique:true })
    email: string;
    @Column()
    password: string; 
    @Column({ length: 11 })
    phone: string;
    @Column({ unique:true })
    userName: string;
    @Column()
    avatar: string;
    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;
    @UpdateDateColumn({ name: 'updated_date' })
    updatedDate: Date;

}   