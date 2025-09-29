import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Photo {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
    
    @ManyToOne(() => User, (user) => user.photos)
    user: User

}