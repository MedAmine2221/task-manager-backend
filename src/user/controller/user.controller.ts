import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { UserService } from "../service/user.service";

@Controller('users')
export class UserController {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly userService: UserService
    ){}

    @Get()
    async findAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    @Get(':id')
    async findUserById(@Param('id') id: any): Promise<any>{
        return await this.userRepository.findOne(id);
    }

    @Get(':email')
    async findUserByEmail(@Param('email') email: string): Promise<any>{
        return this.userService.findUserByMail(email);
    }

    @Post()
    async createUser(@Body() user: User): Promise<User>{
        return await this.userRepository.save(user);
    }

    @Put()
    async updateUser(@Param('id') id: any, @Body() user: User): Promise<any>{
        this.userRepository.update(id, user);
        return await this.userRepository.findOne(id);
    }

    @Delete()
    async deleteUser(@Param('id') id:number):Promise<void>{
        await this.userRepository.delete(id)
    }
}