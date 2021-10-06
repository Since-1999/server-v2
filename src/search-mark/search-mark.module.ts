import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchMarkController } from './search-mark.controller';
import { SearchMarkService } from './service/search-mark.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers:[SearchMarkService],
  controllers: [SearchMarkController]
})
export class SearchMarkModule {}
