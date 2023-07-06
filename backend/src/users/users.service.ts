import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ) {}

    getAll(): Promise<User[]> {
        return this.userRepo.find();
    }

    getById(id: number): Promise<User | null> {
        return this.userRepo.findOne({
            where: { id: id }
        });
    }
    getByEmail(email: string): Promise< User | null> {
        return this.userRepo.findOne({
            where: { email: email }
        });;
    }
    async create(user: User): Promise<User> {
        try {
            return await this.userRepo.save(user);
        } catch (error) {
            throw new ConflictException('No se ha podido guardar el usuario')
        }
    }

    async update(user: User): Promise<User> {
        let userFromDB = await this.userRepo.findOne({
            where: {
                id: user.id
            }
        });
        if (!userFromDB) throw new NotFoundException('Usuario no encontrado');
        try {
            userFromDB.firstName = user.firstName;
            userFromDB.lastName = user.lastName;
            userFromDB.email = user.email;
            userFromDB.password = user.password;
            userFromDB.phone = user.phone;
            userFromDB.userName = user.userName;
            userFromDB.avatar = user.avatar;
        
          

            await this.userRepo.update(userFromDB.id, userFromDB);
            return userFromDB;

        } catch (error) {
            throw new ConflictException('Error actualizando el usuario');
        }
    }
    async deleteById(id: number): Promise<void> {
        let exist = await this.userRepo.exist({
            where: {
                id: id
            }
        });
        if (!exist) throw new NotFoundException('Usuario no encontrado');
        try {
            await this.userRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar')
        }
    }
}
