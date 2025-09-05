import { IsEmail, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(10)
    name: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    password: string

}