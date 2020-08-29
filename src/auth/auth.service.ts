import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from '../user/user.repository';
import { JwtService } from "@nestjs/jwt";
import * as _ from "lodash";
import { jwtConstant } from './auth.constant';

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

  async login(user: any, clientId: string) {
    const payload = {
      iss: "http://localhost:5000",
      sub: user.email,
      type: "auth",
      ..._.pick(user, ["id", "fullName", "avatarUrl"]),
      clientId,
      scopes: []
    }

    return {
      message: "Login successfully",
      token: this.jwtService.sign(payload),
      payload
    }
  }

  async verifyToken(token: string): Promise<any> {
    return await this.jwtService.verifyAsync(token, { secret: jwtConstant.secret })
      .then(res => {
        return {
          message: "Token is valid",
          token,
          res
        }
      })
      .catch(err => {
        throw new BadRequestException("Token is invalid")
      })
  }

  async grantScopes(authToken: string, scopes: Array<any>) {

  }
}