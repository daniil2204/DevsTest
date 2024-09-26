import { HTTPType } from "@/types/services";
import { AxiosInstance } from "axios";
import { api } from "@/network/axiosInstance";

class HttpService {
  protected api: AxiosInstance = api;
  constructor() {}

  protected async get({ request }: HTTPType) {
    const { data } = await this.api.get(request);
    return data;
  }

  protected async post({ request, body }: HTTPType) {
    const { data } = await this.api.post(request, body);
    return data;
  }
}

export default HttpService;
