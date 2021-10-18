import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './src/app.module';

const PORT = process.env.PORT || 3000;


function configSwagger(app) {
  if (process.env.NODE_ENV !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Since 1999 API documents')
      .setDescription(
        '',
      )
      .setVersion('2.0')
      .build();

    const doc = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('api/document', app, doc);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('/api')

  configSwagger(app);

  await app.listen(PORT, ()=>{
    console.log("Running ", PORT);
  })
}

bootstrap();
