"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    database: {
        url: process.env.DATABASE_URL
    },
    jwt: {
        secretCode: process.env.JWT_SECRET,
        jwtTime: process.env.JWT_EXPIRES
    }
});
//# sourceMappingURL=config.js.map