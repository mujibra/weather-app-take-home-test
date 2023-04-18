import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CityHistoryController } from './city-history.controller';
import { CityHistoryService } from './city-history.service';

@Module({
  imports: [HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [CityHistoryService],
  controllers: [CityHistoryController]
})
export class CityHistoryModule {}
