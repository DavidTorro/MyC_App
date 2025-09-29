import { PhotoService } from './photo.service';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    photoList(): Promise<import("./photo.entity").Photo[]>;
}
