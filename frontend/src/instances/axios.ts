import { ISiteminder } from "@d/interfaces/booking.interface"
import axios, { AxiosPromise } from "axios"

import { axiosError } from "../data/errors"
import { IXHttp } from "../data/interfaces/xhttp.interface"

const api = axios.create({
	baseURL: process.env.VUE_APP_SERVICE_URL,
	headers: {
		"X-Requested-With": "XMLHttpRequest"
	}
})

const axiosApi = async (request: IXHttp): Promise<Array<Record<string, unknown>> | undefined> => {
	try {
		const response = await api.get(request.url)
		const { data } = response
		return data
	} catch (error) {
		axiosError(200, error)
		return undefined
	}
}

const booking = axios.create({
	headers: {
		"X-Requested-With": "XMLHttpRequest"
	}
})

const axiosGetBookingData = async (request: IXHttp): Promise<ISiteminder | undefined> => {
	let siteminder: ISiteminder
	try {
		const response = await booking.get(request.url)
		// eslint-disable-next-line prefer-destructuring
		siteminder = response.data[0]
	} catch (error) {
		axiosError(200, error)
		return undefined
	}
	return siteminder
}

const axiosGetBookingDatas = async (
	requests: Array<IXHttp>,
	delay?: boolean
): Promise<Array<unknown> | undefined> => {
	if (delay) {
		booking.interceptors.request.use(
			(config) => new Promise((resolve) => setTimeout(() => resolve(config), 100))
		)
	}
	try {
		const axiosRequests: Array<AxiosPromise<Record<string, unknown>>> = []
		requests.forEach((request) => {
			axiosRequests.push(booking.get(request.url))
		})
		const responses = await axios.all(axiosRequests)
		const data: Array<unknown> = []
		responses.forEach((response) => {
			data.push(response.data[0])
		})
		return data
	} catch (error) {
		axiosError(200, error)
	}
	return undefined
}

const axiosPostContactData = async (
	request: IXHttp
): Promise<Array<Record<string, string>> | undefined> => {
	try {
		const response = await api.post(request.url, request.data)
		const { data } = response
		return data
	} catch (error) {
		axiosError(200, error)
		return undefined
	}
}

export { api, axiosApi, axiosGetBookingData, axiosGetBookingDatas, axiosPostContactData }
