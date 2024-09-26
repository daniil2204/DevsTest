import { Controller, Get, Param, Post } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}
  @Get()
  async getCountries() {
    return await this.countriesService.getCountries();
  }
  @Get('/:code')
  async getInfoAboutCountry(@Param('code') code: string) {
    return await this.countriesService.getInfoAboutCountry(code);
  }
}
