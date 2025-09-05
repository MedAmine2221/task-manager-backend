"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./user/controller/user.controller");
const user_entity_1 = require("./user/entity/user.entity");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/module/auth.module");
const auth_controller_1 = require("./auth/controller/auth.controller");
const auth_service_1 = require("./auth/service/auth.service");
const config_2 = __importDefault(require("./config/config"));
const db_config_1 = __importDefault(require("./config/db.config"));
const user_service_1 = require("./user/service/user.service");
const jwt_1 = require("@nestjs/jwt");
const user_module_1 = require("./user/module/user.module");
const roles_module_1 = require("./roles/module/roles.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                load: [config_2.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => (0, db_config_1.default)(configService),
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            roles_module_1.RolesModule,
        ],
        controllers: [user_controller_1.UserController, auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, user_service_1.UserService, jwt_1.JwtService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map