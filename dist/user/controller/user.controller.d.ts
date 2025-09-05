import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { UserService } from "../service/user.service";
export declare class UserController {
    private readonly userRepository;
    private readonly userService;
    constructor(userRepository: Repository<User>, userService: UserService);
    findAllUsers(): Promise<User[]>;
    findUserById(id: any): Promise<any>;
    findUserByEmail(email: string): Promise<any>;
    createUser(user: User): Promise<User>;
    updateUser(id: any, user: User): Promise<any>;
    deleteUser(id: number): Promise<void>;
}
