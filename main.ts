import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('/api')

  await app.listen(PORT, ()=>{
    console.log("Running ", PORT);
  })
}
bootstrap();
