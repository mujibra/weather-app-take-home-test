import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CityHistoryModule } from './city-history/city-history.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, CityHistoryModule, PrismaModule],
})
export class AppModule {}
