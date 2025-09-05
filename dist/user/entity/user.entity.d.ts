import { Roles } from "src/roles/entity/roles.entity";
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Roles;
}
