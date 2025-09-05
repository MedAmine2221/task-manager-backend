import { AuthPayloadDTO } from "../dto/auth.dto";
import { AuthService } from "../service/auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(authPayload: AuthPayloadDTO): Promise<{
        access_token: string;
    } | null | undefined>;
}
