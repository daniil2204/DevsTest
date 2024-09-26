import axios from 'axios';
export const nagerApi = axios.create({
  withCredentials: true,
  baseURL: 'https://date.nager.at/api/v3',
});
