// import { Module } from "@nestjs/common";
// import { TypeOrmModule } from "@nestjs/typeorm";
// import { UserController } from "./controllers/user.controller";
// import { User } from "./entities/user.entity";

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host:'localhost',
//       port:5432,
//       username: 'postgres',
//       password: 'admin0000',
//       database: 'task-manager',
//       entities: [User],
//       synchronize: true
//     }),
//     TypeOrmModule.forFeature([User]),
//   ],
//   controllers: [UserController]
// })
// export class AppModule {}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./controllers/user.controller";
import { User } from "./entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.DATABASE_URL, // ✅ Railway injecte automatiquement cette variable
        ssl: {
          rejectUnauthorized: false, // ✅ nécessaire pour Railway
        },
        autoLoadEntities: true, // ✅ pas besoin de les lister à la main
        synchronize: true,      // ⚠️ désactive en prod (risque de perte de données)
        logging: true,          // ✅ utile pour debug
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
})
export class AppModule {}