"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles_entity_1 = require("../roles/entity/roles.entity");
const user_entity_1 = require("../user/entity/user.entity");
exports.default = (configService) => ({
    type: "postgres",
    url: configService.get("database.url"),
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [user_entity_1.User, roles_entity_1.Roles],
    synchronize: true,
});
//# sourceMappingURL=db.config.js.map