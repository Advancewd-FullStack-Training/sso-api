import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from '../../user/user.repository';
import { use } from 'passport';
const FacebookTokenStrategy = require('passport-facebook-token');

@Injectable()
export class FacebookStrategy {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository
  ) {
    this.init()
  }

  init() {
    use(
      new FacebookTokenStrategy(
        {
          clientID: "302364334174338",
          clientSecret: "a75f07ef36c1fc83641db3723d9ed88f",
          fbGraphVersion: 'v3.0',
        },
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: any,
        ) => {
          console.log(profile)
          const user = this.userRepo.create({
            email: profile._json.email,
            fullName: profile._json.name,
            data: profile._json
          });
          await user.save()
          return done(null, user);
        },
      ),
    );
  }
}