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
        url: process.env.DATABASE_URL, // ✅ Railway fournit cette variable
        ssl: {
          rejectUnauthorized: false, // ✅ nécessaire pour Railway
        },
        entities: [User],
        synchronize: true, // ⚠️ désactiver en prod
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
})
export class AppModule {}
