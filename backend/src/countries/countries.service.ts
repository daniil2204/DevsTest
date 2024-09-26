import { BadRequestException, Injectable } from '@nestjs/common';
import { countryShowApi } from 'src/axios/countriesnow';
import { nagerApi } from 'src/axios/nagerAPI';
import {
  ICountry,
  ICountryResponce,
  ListOfCountries,
  Population,
} from 'src/types/country';
import { MSGS } from 'src/utils/msgs';

@Injectable()
export class CountriesService {
  async getCountries(): Promise<ListOfCountries[]> {
    try {
      const { data } = await nagerApi.get('/AvailableCountries');
      return data;
    } catch (err) {
      return [];
    }
  }
  async getInfoAboutCountry(code: string): Promise<ICountryResponce> {
    try {
      const { data } = await nagerApi.get<ICountry>(`/CountryInfo/${code}`);
      const population = await this.getPopulationByCountry(data.commonName);
      const flag = await this.getFlagByCountry(data.commonName);
      return { data, flag, population };
    } catch (err) {
      throw new BadRequestException(MSGS.BAD_CODE);
    }
  }
  private async getPopulationByCountry(country: string): Promise<Population[]> {
    try {
      const { data } = await countryShowApi.post(`/population`, {
        country,
      });
      return data.data.populationCounts;
    } catch (error) {
      throw new BadRequestException(MSGS.BAD_COUNTRY);
    }
  }
  private async getFlagByCountry(country: string): Promise<string | null> {
    try {
      const { data } = await countryShowApi.post(`/flag/images`, {
        country,
      });
      return data.data.flag;
    } catch (error) {
      throw new BadRequestException(MSGS.BAD_COUNTRY);
    }
  }
}
