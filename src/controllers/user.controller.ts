import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Controller('users')
export class UserController {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    @Get()
    async findAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    @Get(':id')
    async findUserById(@Param('id') id: any): Promise<any>{
        return await this.userRepository.findOne(id);
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