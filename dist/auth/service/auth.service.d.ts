import { AuthPayloadDTO } from "../dto/auth.dto";
import { UserService } from "src/user/service/user.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    validateUser({ email, password }: AuthPayloadDTO): Promise<{
        access_token: string;
    } | null | undefined>;
}
