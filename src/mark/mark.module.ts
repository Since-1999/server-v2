import { Module } from '@nestjs/common';
import { MarkController } from './mark.controller';
import { MarkService } from './service/search-mark.service';

@Module({
  providers:[MarkService],
  controllers: [MarkController]
})
export class MarkModule {}
