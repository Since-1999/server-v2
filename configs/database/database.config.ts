import 'dotenv/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const DATABASE_CONFIG = TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectTimeout: 60*60*1000,
    acquireTimeout: 60*60*1000,
    entities: [
        'dist/core/models/*.js'
    ],
    synchronize: false,
});

// parseInt(process.env.DB_PORT)
