import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlOrmConfig } from './datasource/mysql.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OauthServiceModule } from './oauth-service/oauth-service.module';
import { ConsoleModule } from 'nestjs-console';
import { OauthClientModule } from './oauth-client/oauth-client.module';
import { OauthScopeModule } from './oauth-scope/oauth-scope.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlOrmConfig),
    UserModule, AuthModule,
    OauthServiceModule,
    OauthClientModule,
    ConsoleModule,
    OauthScopeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
