import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { serverLogger } from './utils/logger';

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);
        const configService = app.get(ConfigService);
        const port = Number(configService.get('API_PORT'));

        app.enableCors({
            origin: [
                'http://localhost:3000',
                'https://your-frontend-domain.com',
            ],
            credentials: true,
        });

        await app.listen(port);

        serverLogger('success');
    } catch (exeception) {
        serverLogger('error', exeception);
    }
}

void bootstrap();
