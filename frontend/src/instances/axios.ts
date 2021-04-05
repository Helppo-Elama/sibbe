import axios from "axios";
import { ISiteminder } from "@d/interfaces/booking.interface";
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

const axiosApi = async (request: IXHttp): Promise<Array<Record<string, string>> | boolean> => {
	try {
		const response = await api.get(request.url);
		const data = response.data;
		return data;
	} catch (error) {
		axiosError(200, error);
		return false;
	}
};

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

const axiosGetBookingData = async (request: IXHttp): Promise<ISiteminder | boolean> => {
	let siteminder = false;
	try {
		const response = await booking.get(request.url);
		siteminder = response.data[0];
	} catch (error) {
		axiosError(200, error);
		return false;
	}
	return siteminder;
};

export { api, axiosGetBookingData, axiosApi };
