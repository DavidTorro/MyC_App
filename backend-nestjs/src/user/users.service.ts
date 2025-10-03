import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    findAll() :Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id_user: number) :Promise<User | null> {
        return this.userRepository.findOneBy({id_user});
    }


    async remove(id: number) :Promise<void> {
        await this.userRepository.delete(id);
    }

    async create(data: UserDto) : Promise<User> {
        const u = this.userRepository.create(data);
        return this.userRepository.save(u);
    }


    // getUsers() {}
    // createUser(userDto: UserDto) {}
}
