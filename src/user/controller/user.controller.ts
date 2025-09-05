import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { User } from "src/user/entity/user.entity";
import { UserService } from "../service/user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(":id")
  async findUserById(@Param("id") id: number): Promise<User | null> {
    return this.userService.findById(id);
  }

  @Get("email/:email")
  async findUserByEmail(@Param("email") email: string): Promise<User | null> {
    return this.userService.findUserByMail(email);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(":id")
  async updateUser(
    @Param("id") id: number,
    @Body() user: User,
  ): Promise<User | null> {
    return this.userService.update(id, user);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
