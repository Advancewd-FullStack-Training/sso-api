import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './user.dto';
import { UserEntity } from "./user.entity";
import { UserClientRepository } from '../user-client/user-client.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository,
    @InjectRepository(UserClientRepository) private userClientRepo: UserClientRepository
  ) { }

  async createUser(data: CreateUserDTO): Promise<UserEntity> {
    const newUser = await this.userRepo.create(data).save();

    await this.userClientRepo
      .create({
        userId: newUser.id,
        oauthClientId: "547e31be-bb8d-41b5-9ab2-4d77ea3d1dde"
      })
      .save()

    return await newUser.save()
  }
}