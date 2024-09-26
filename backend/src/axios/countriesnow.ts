import axios from 'axios';
export const countryShowApi = axios.create({
  withCredentials: true,
  baseURL: 'https://countriesnow.space/api/v0.1/countries',
});
