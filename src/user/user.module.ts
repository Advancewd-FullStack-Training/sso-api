import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserClientRepository } from '../user-client/user-client.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, UserClientRepository])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }