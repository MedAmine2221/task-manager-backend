import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Roles } from "src/roles/entity/roles.entity";
import { User } from "src/user/entity/user.entity";
export default (configService: ConfigService): TypeOrmModuleOptions => ({
  type: "postgres",
  url: configService.get("database.url"), // Railway provides this variable
  ssl: {
    rejectUnauthorized: false, // needed for Railway
  },
  entities: [User, Roles],
  synchronize: true, // disable in production
});
