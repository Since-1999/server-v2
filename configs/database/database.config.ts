import 'dotenv/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const DATABASE_CONFIG = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'stu_mark',
    entities: [
        'dist/core/models/*.js'
    ],
    synchronize: false,
});

// parseInt(process.env.DB_PORT)
