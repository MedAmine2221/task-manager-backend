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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const roles_entity_1 = require("../entity/roles.entity");
let RolesService = class RolesService {
    rolesRepository;
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async onModuleInit() {
        const roles = [
            {
                name_fr: "ADMIN",
                name_eng: "ADMIN",
            },
            {
                name_fr: "SCRUM_MASTER",
                name_eng: "SCRUM_MASTER",
            },
            {
                name_fr: "DÉVELOPPEUR",
                name_eng: "DEVELOPER",
            },
            {
                name_fr: "Testeur_QA",
                name_eng: "QA_TESTER",
            },
            {
                name_fr: "MANAGÉR",
                name_eng: "MANAGER",
            },
        ];
        for (const name of roles) {
            const exists = await this.rolesRepository.findOne({
                where: { name_fr: name.name_fr },
            });
            if (!exists) {
                const role = this.rolesRepository.create({ ...name });
                await this.rolesRepository.save(role);
            }
        }
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(roles_entity_1.Roles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map