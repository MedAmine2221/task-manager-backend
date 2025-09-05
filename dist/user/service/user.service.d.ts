import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findUserByMail(email: string): Promise<User | null>;
    create(user: User): Promise<User>;
    update(id: number, user: User): Promise<User | null>;
    delete(id: number): Promise<void>;
}
