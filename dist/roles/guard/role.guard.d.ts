import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthService } from "src/auth/service/auth.service";
export declare class RoleGuard implements CanActivate {
    private reflactor;
    private authService;
    constructor(reflactor: Reflector, authService: AuthService);
    matchRoles(roles: string[], userRole: string): boolean;
    canActivate(context: ExecutionContext): Promise<any>;
}
