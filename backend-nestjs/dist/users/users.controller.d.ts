import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    userList(): Promise<import("./user.entity").User[]>;
}
