"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (configService) => ({
    secret: configService.get("jwt.secretCode"),
    signOptions: { expiresIn: configService.get("jwt.jwtTime") },
    secretOrPrivateKey: configService.get("jwt.secretCode"),
});
//# sourceMappingURL=jwt.config.js.map