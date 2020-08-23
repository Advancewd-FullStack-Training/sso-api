import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { OauthServiceRepository } from './oauth-service.repository';
import { ConsoleModule } from "nestjs-console";
import { OauthServiceService } from './oauth-service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OauthServiceRepository]),
    ConsoleModule
  ],
  providers: [OauthServiceService]
})
export class OauthServiceModule { }