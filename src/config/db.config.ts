import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
export default (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    url: configService.get("database.url"), // Railway provides this variable
    ssl: {
        rejectUnauthorized: false, // needed for Railway
    },
    entities: [User],
    synchronize: true, // disable in production
})