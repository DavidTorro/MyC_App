import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotoService],
  controllers: [PhotoController],
  exports: [TypeOrmModule],
})

export class PhotoModule {
  constructor(private photoService: PhotoService) {}
}
