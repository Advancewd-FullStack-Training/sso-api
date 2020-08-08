import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlOrmConfig } from './datasource/mysql.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlOrmConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
