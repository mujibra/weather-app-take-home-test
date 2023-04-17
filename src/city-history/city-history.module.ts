import { Module } from '@nestjs/common';
import { CityHistoryController } from './city-history.controller';
import { CityHistoryService } from './city-history.service';

@Module({
  providers: [CityHistoryService],
  controllers: [CityHistoryController]
})
export class CityHistoryModule {}
