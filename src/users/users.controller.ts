import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { IUser } from './interface/user.interface';

@Controller('users')
export class UsersController {
    // usersService: UsersService;
    constructor(private readonly usersService: UsersService) {}

    @Get()
    userList() {
        return this.usersService.findAll();
    }


    // @Get()
    // getUsers() {
    //     this.usersService.getUsers();
    // }

    // @Post()
    // createUser(@Body() userDto: UserDto) {
    //     this.usersService.createUser(userDto);
    // }
}
