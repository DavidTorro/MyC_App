import { IsString, IsEmail, IsOptional,IsNumber, isNotEmpty, IsNotEmpty } from 'class-validator';

export class UserDto {
    @IsNumber()
    id_user: number;   // obligatorio

    @IsNumber()
    @IsOptional()
    id_comp?: number;   // opcional

    @IsNumber()
    id_persona: number

    @IsNumber()
    rol: number

    @IsString()
    @IsNotEmpty()
    nom_user: string

    @IsString() 
    @IsNotEmpty()
    pwd_user: string

    @IsString() 
    @IsNotEmpty()
    @IsEmail()
    email_user: string

    @IsString()
    foto_perfil_path: string;

}