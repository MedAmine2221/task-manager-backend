import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findUserByMail(email: string): Promise<User | null>;
}
