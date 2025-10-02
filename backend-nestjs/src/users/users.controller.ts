import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
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

    @Post('users')
    async create(@Body('user') userData: UserDto){
        return this.usersService.create(userData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id); // el + convierte el string en number
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
