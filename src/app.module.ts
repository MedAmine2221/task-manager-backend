import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./controllers/user.controller";
import { User } from "./entities/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import config from "./config/config";
import dbConfig from "./config/db.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => dbConfig(configService),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
})
export class AppModule {}
