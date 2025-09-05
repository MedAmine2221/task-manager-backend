import { Module } from "@nestjs/common";
import { Roles } from "../entity/roles.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Roles])],
  exports: [TypeOrmModule],
})
export class RolesModule {}
