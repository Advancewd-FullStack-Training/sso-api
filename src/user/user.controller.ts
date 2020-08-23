import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from './user.service';
import { UserEntity } from "./user.entity";
import { CreateUserDTO } from './user.dto';

@Controller("/users")
export class UserController {
  constructor(
    private userService: UserService
  ) { }

  @Post()
  async createUser(@Body() data: CreateUserDTO): Promise<UserEntity> {
    return await this.userService.createUser(data);
  }
}