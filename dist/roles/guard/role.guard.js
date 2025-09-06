"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorator_1 = require("../roles.decorator");
const auth_service_1 = require("../../auth/service/auth.service");
let RoleGuard = class RoleGuard {
    reflactor;
    authService;
    constructor(reflactor, authService) {
        this.reflactor = reflactor;
        this.authService = authService;
    }
    matchRoles(roles, userRole) {
        return roles.some((role) => role === userRole);
    }
    async canActivate(context) {
        const roles = this.reflactor.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        console.log("roles", roles);
        if (roles?.length === 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const { authorization } = request.headers;
        if (!authorization || authorization.trim() === "") {
            throw new common_1.UnauthorizedException("Please provide token");
        }
        const authToken = authorization.replace(/bearer/gim, "").trim();
        const resp = await this.authService.validateToken(authToken);
        return roles.includes(resp.role.name_fr || resp.role.name_eng);
    }
};
exports.RoleGuard = RoleGuard;
exports.RoleGuard = RoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        auth_service_1.AuthService])
], RoleGuard);
//# sourceMappingURL=role.guard.js.map