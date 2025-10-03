import { type } from "os";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    id_comp: number

    @Column()
    id_persona: number

    @Column()
    rol: number

    @Column()
    nom_user: string

    @Column() 
    pwd_user: string

    @Column()
    foto_perfil_path: string

    @Column()
    email_user: string

    // @ManyToOne(() => Comparsa, (comparsa) => comparsa.users)
    // comparsa : Comparsa
    
    // @OneToMany(() => Photo, photo => photo.user)
    // photos: Photo[];
    
}