import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { AuthCity } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityHistoryService {
    constructor(private readonly httpService : HttpService, private config: ConfigService, private prisma: PrismaService) {}

    async get_city(dto : AuthCity) {
        const data = await firstValueFrom(
            this.httpService.get(`http://api.openweathermap.org/geo/1.0/direct?q=${dto.city}&limit=1&appid=${this.config.get("WEATHER_API_KEY")}`)
        )

        if (data.data[0]) {
            const city_data = await firstValueFrom(
                this.httpService.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data.data[0]?.lat}&lon=${data.data[0]?.lon}&appid=${this.config.get("WEATHER_API_KEY")}`)
            )
                
            return city_data.data
        }

        try {
            const history = await this.prisma.history.create({
                data: {
                    city: dto.city,
                    userId : 1
                },
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
