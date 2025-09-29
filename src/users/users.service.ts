import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
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

    findOne(id: number) :Promise<User | null> {
        return this.userRepository.findOneBy({id});
    }


    async remove(id: number) :Promise<void> {
        await this.userRepository.delete(id);
    }


    // getUsers() {}
    // createUser(userDto: UserDto) {}
}
