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

const axiosApi = async (request: IXHttp): Promise<Array<Record<string, string>> | undefined> => {
	try {
		const response = await api.get(request.url);
		const data = response.data;
		return data;
	} catch (error) {
		axiosError(200, error);
		return;
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

const axiosGetBookingData = async (request: IXHttp): Promise<ISiteminder | undefined> => {
	let siteminder: ISiteminder;
	try {
		const response = await booking.get(request.url);
		siteminder = response.data[0];
	} catch (error) {
		axiosError(200, error);
		return;
	}
	return siteminder;
};

const axiosPostContactData = async (
	request: IXHttp
): Promise<Array<Record<string, string>> | undefined> => {
	try {
		const response = await api.post(request.url, request.data);
		const data = response.data;
		return data;
	} catch (error) {
		axiosError(200, error);
		return;
	}
};

export { api, axiosApi, axiosGetBookingData, axiosPostContactData };
