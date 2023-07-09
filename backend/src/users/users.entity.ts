import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin'
}
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10 })
    firstName: string;

    @Column({ length: 15 })
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ length: 9 })
    phone: string;

    @Column({ unique: true })
    userName: string;

    @Column()
    avatar: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;

    @CreateDateColumn({ name: 'created_date' })
    createdDate: Date;

    @UpdateDateColumn({ name: 'updated_date' })
    updatedDate: Date;

}   