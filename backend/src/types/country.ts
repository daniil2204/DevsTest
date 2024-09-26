export type ListOfCountries = {
  countryCode: string;
  name: string;
};

export interface ICountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: ICountry[] | null;
}

export type Population = {
  year: number;
  value: number;
};

export interface ICountryResponce {
  data: ICountry;
  flag: string;
  population: Population[];
}
