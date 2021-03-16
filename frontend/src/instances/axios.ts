import axios from "axios";
import { IBookingData, ISiteminder } from "@d/interfaces/booking.interface";
import { axiosError } from "../data/errors";
import { IXHttp } from "../data/interfaces/xhttp.interface";

declare module "axios" {
  export interface AxiosRequestConfig {
    delayed?: boolean;
  }
}

const api = axios.create({
  baseURL: process.env.VUE_APP_SERVICE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

const booking = axios.create({
  delayed: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

booking.interceptors.request.use((config) => {
  if (config.delayed) {
    return new Promise((resolve) => setTimeout(() => resolve(config), 100));
  }
  return config;
});

const axiosGetBookingData = async (
  request: IXHttp
): Promise<{
  siteminder: ISiteminder | boolean;
  siteminderLoaded: boolean;
}> => {
  let siteminder = false;
  let siteminderLoaded = false;
  try {
    const response = await booking.get(request.url);
    siteminder = response.data[0];
  } catch (error) {
    axiosError(200, error);
  }
  siteminderLoaded = true;
  return {
    siteminder,
    siteminderLoaded,
  };
};

export { api, axiosGetBookingData };
