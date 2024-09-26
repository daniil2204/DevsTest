import { ICountryResponce, ListOfCountries } from "@/types/countries";
import HttpService from "./http.service";

class CountriesService extends HttpService {
  constructor() {
    super();
  }
  async getAllCountries(): Promise<ListOfCountries[]> {
    const data = await this.get({
      request: "",
    });
    return data;
  }
  async getInfoByCode(code: string): Promise<ICountryResponce> {
    const data = await this.get({
      request: `/${code}`,
    });
    return data;
  }
}

export const countriesService = new CountriesService();
