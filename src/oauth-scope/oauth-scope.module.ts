import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { OauthScopeRepository } from './oauth-scope.repository';
import { OauthScopeService } from './oauth-scope.service';
import { ConsoleModule } from 'nestjs-console';

@Module({
  imports: [
    TypeOrmModule.forFeature([OauthScopeRepository]),
    ConsoleModule
  ],
  providers: [OauthScopeService]
})
export class OauthScopeModule { }