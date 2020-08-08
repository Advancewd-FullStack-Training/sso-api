import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import * as path from 'path';

const envPath = path.join(__dirname, "..", ".env.local")
dotenv.config({ path: envPath });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['warn', 'error']
  });

  app.setGlobalPrefix("/api");

  const port = 5000

  await app.listen(port, () => {
    console.log(`App is running port port ${port}`)
  });
}
bootstrap();
