import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private photoRepository: Repository<Photo>
    ) {}

    findAll() :Promise<Photo[]> {
        return this.photoRepository.find();
    }

    findOne(id: number) :Promise<Photo | null> {
        return this.photoRepository.findOneBy({id});
    }

    async remove(id: number) :Promise<void> {
        await this.photoRepository.delete(id);
    }
}
