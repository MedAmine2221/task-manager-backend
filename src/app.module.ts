import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user/controller/user.controller";
import { User } from "./user/entity/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from './auth/module/auth/auth.module';
import { AuthController } from './auth/controller/auth.controller';
import { AuthService } from './auth/service/auth.service';
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
    AuthModule,
  ],
  controllers: [UserController, AuthController],
  providers: [AuthService],
})
export class AppModule {}
