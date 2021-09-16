import { ISiteminderArray } from "@d/interfaces/booking.interface"
import axios, { AxiosPromise } from "axios"

import { axiosError } from "../data/errors"
import { IXHttp } from "../data/interfaces/xhttp.interface"

const api = axios.create({
	baseURL: process.env.VUE_APP_SERVICE_URL,
	headers: {
		"X-Requested-With": "XMLHttpRequest"
	}
})
const axiosApi = async <T>(request: IXHttp): Promise<T | undefined> => {
	try {
		const response = await api.get(request.url)
		const { data } = response
		if (response.status !== 200 && !data)
			throw new Error(`Request: ${request.url} did not get any data at response`)
		return data
	} catch (error) {
		axiosError(200, error)
		return undefined
	}
}

const axiosGetBookingDatas = async (
	requests: Array<IXHttp>,
	delay?: boolean
): Promise<ISiteminderArray | undefined> => {
	if (delay) {
		api.interceptors.request.use(
			(config) => new Promise((resolve) => setTimeout(() => resolve(config), 100))
		)
	}
	try {
		const axiosRequests: Array<AxiosPromise<ISiteminderArray>> = []
		requests.forEach((request) => {
			axiosRequests.push(api.get(request.url))
		})
		const responses = await axios.all(axiosRequests)
		const data: ISiteminderArray = []
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

export { axiosApi, axiosGetBookingDatas, axiosPostContactData }
