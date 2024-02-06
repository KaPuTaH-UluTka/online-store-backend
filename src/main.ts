import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/validation.pipe';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('v1');

    const config = new DocumentBuilder()
      .setTitle('Online store')
      .setDescription('API documentation')
      .setVersion('1.0.0')
      .addTag('UluTkA')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);

    // app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT, () =>
      console.log(`Server started on port ${PORT} http://localhost:${PORT}/docs`)
    );
  } catch (err) {
    console.log(err);
  }
};

(async () => await start())();
