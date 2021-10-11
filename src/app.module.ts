import { Module } from '@nestjs/common';
import { DATABASE_CONFIG } from 'configs/database/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchMarkModule } from './search-mark/search-mark.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DATABASE_CONFIG,
    SearchMarkModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
