import { User } from "src/user/entity/user.entity";
import { UserService } from "../service/user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAllUsers(): Promise<User[]>;
    findUserById(id: string): Promise<User | null>;
    findUserByEmail(email: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
    updateUser(id: string, user: User): Promise<User | null>;
    deleteUser(id: number): Promise<void>;
}
