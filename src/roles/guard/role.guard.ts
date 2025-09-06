import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../roles.decorator";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflactor: Reflector) {}
  matchRoles(roles: string[], userRole: string) {
    return roles.some((role) => role === userRole);
  }
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflactor.get<string[]>(ROLES_KEY, context.getHandler());
    if (!roles) {
      return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const user = request.user;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.matchRoles(roles, user.role.name_fr);
  }
}
