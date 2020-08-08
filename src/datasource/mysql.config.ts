import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const mysqlConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "hackagon",
  database: "binance",
  entities: [__dirname + "/../graph/entities/*.entity.{js,ts}"],
  synchronize: true
}