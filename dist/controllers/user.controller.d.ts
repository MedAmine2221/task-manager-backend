import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
export declare class UserController {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAllUsers(): Promise<User[]>;
    findUserById(id: any): Promise<any>;
    createUser(user: User): Promise<User>;
    updateUser(id: any, user: User): Promise<any>;
    deleteUser(id: number): Promise<void>;
}
