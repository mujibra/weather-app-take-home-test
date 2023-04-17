import { Controller, Post } from '@nestjs/common';
import { CityHistoryService } from './city-history.service';

@Controller('city-history')
export class CityHistoryController {
    constructor(private cityHistoryService : CityHistoryService) {}

    @Post('city')
    search_city(){
        return 'Masuk Bos!'
    }
}
