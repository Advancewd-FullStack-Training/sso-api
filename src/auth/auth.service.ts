import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from '../user/user.repository';
import { JwtService } from "@nestjs/jwt";
import * as _ from "lodash";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository,
    private jwtService: JwtService
  ) { }

  async validateCredentials(email: string, password: string): Promise<any> {
    const foundUser = await this.userRepo.findOne({ email })
    if (!foundUser) throw new NotFoundException("User not exist");
    if (foundUser.password !== password) return null;
    return foundUser;
  }

  async login(user: any) {
    const payload = _.pick(user, ["id", "email", "fullName", "avatarUrl"])
    return {
      message: "Login successfully",
      token: this.jwtService.sign(payload)
    }
  }
}