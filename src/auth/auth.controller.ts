import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller("/auth")
export class AuthController {
  constructor(
    private authService: AuthService
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Request() req: any) {
    return this.authService.login(req.user)
  }

  @UseGuards(AuthGuard('facebook-token'))
  @Get('facebook')
  async getTokenAfterFacebookSignIn(@Request() req) {
    console.log(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("/me")
  async getMe(@Request() req) {
    return req.user
  }
}