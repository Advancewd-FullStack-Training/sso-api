import { Module } from "@nestjs/common";
import { UserRepository } from '../user/user.repository';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { jwtConstant } from './auth.constant';
import { JwtStrategy } from './strategies/jwt.strategy';
import { FacebookStrategy } from './strategies/facebook.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: { expiresIn: "1h" }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, FacebookStrategy],
  controllers: [AuthController]
})
export class AuthModule { }