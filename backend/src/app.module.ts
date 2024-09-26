import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CountriesModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
