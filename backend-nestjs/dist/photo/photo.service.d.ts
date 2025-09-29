import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
export declare class PhotoService {
    private photoRepository;
    constructor(photoRepository: Repository<Photo>);
    findAll(): Promise<Photo[]>;
    findOne(id: number): Promise<Photo | null>;
    remove(id: number): Promise<void>;
}
