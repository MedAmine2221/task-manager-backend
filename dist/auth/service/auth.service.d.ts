import { AuthPayloadDTO } from '../dto/auth.dto';
import { UserService } from 'src/user/service/user.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    validateUser({ email, password }: AuthPayloadDTO): Promise<import("../../user/entity/user.entity").User | null>;
}
