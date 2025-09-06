import { OnModuleInit } from "@nestjs/common";
import { User } from "../entity/user.entity";
import { Repository } from "typeorm";
export declare class UserService implements OnModuleInit {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    onModuleInit(): Promise<void>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findUserByMail(email: string): Promise<User | null>;
    create(user: User): Promise<User>;
    update(id: string, user: User): Promise<User | null>;
    delete(id: number): Promise<void>;
}
