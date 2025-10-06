import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        // ✅ Load environment variables
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `./environments/.env.${process.env.NODE_ENV === 'production' ? 'production' : 'local'}`,
        }),

        // ✅ Configure TypeORM with env values
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                // const values = {
                //     type: 'mysql',
                //     host: configService.get<string>('DB_HOST'),
                //     port: configService.get<number>('DB_PORT') || 3306,
                //     username: configService.get<string>('DB_USER'),
                //     password: configService.get<string>('DB_PASS'),
                //     database: configService.get<string>('DB_NAME'),
                //     autoLoadEntities: true,
                //     synchronize: false,
                // };
                // console.table(values);

                return {
                    type: 'mysql',
                    host: configService.get<string>('DB_HOST'),
                    port: configService.get<number>('DB_PORT') || 3306,
                    username: configService.get<string>('DB_USER'),
                    password: configService.get<string>('DB_PASS'),
                    database: configService.get<string>('DB_NAME'),
                    autoLoadEntities: true,
                    synchronize: false,
                };
            },
        }),
        UserModule,
    ],
})
export class AppModule {}
