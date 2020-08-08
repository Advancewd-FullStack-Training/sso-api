import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import * as path from 'path';
import { config } from "./config";

const envPath = path.join(__dirname, "..", ".env.local")
dotenv.config({ path: envPath });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['warn', 'error']
  });

  app.setGlobalPrefix("/api");

  const port = 5000

  await app.listen(port, () => {
    console.log(`App is running on:`)
    console.table({
      PORT: port,
      "NODE ENV": process.env.NODE_ENV,
      "DB HOST": config.host
    })
  });
}
bootstrap();
