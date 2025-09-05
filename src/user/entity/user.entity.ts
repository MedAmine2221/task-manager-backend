import { MinLength } from "class-validator";
import { Roles } from "src/roles/entity/roles.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(10)
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Roles, (role) => role.users)
  @JoinColumn({ name: "role_id" })
  role: Roles;
}
