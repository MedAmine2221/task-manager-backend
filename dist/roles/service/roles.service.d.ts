import { OnModuleInit } from "@nestjs/common";
import { Repository } from "typeorm";
import { Roles } from "../entity/roles.entity";
export declare class RolesService implements OnModuleInit {
    private readonly rolesRepository;
    constructor(rolesRepository: Repository<Roles>);
    onModuleInit(): Promise<void>;
}
