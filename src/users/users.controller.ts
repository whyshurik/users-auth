import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "./user.schema";
import {ApiResponse} from "@nestjs/swagger";



@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UserService) {}

    @ApiResponse({ status: 200, description: 'User created'})
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        await this.usersService.create(createUserDto);
    }

    @ApiResponse({status: 200, description: 'All users fetched'})
    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}