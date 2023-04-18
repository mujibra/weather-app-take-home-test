import { Body, Controller, Post } from '@nestjs/common';
import { CityHistoryService } from './city-history.service';
import { AuthCity } from 'src/auth/dto';

@Controller('city-history')
export class CityHistoryController {
    constructor(private cityHistoryService : CityHistoryService) {}

    @Post('city')
    search_city(@Body() dto : AuthCity){
        return this.cityHistoryService.get_city(dto)
    }
}
