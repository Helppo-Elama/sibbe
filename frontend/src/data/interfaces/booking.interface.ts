/* eslint-disable camelcase */
import { IXHttp } from "./xhttp.interface"

export interface IBookingData {
	request: IXHttp
	dateRange: { start: Date; end: Date }
}

export interface IBookingApiUrl {
	start: string
	end: string
}

export interface IBookingUrl {
	start: string
	end?: string
	id: number | undefined
}
export interface IRoomTypeDate {
	date: string
	available: number
	close_to_arrival: boolean
	close_to_departure: boolean
	min_stay: number
	max_stay: number
	stop_sell: boolean
	rate: number
}

export interface IRoomType {
	id: number
	name: string
	room_type_dates: IRoomTypeDate[]
	included_occupancy: number
	max_occupancy: number
	max_child_occupancy: number
	max_infant_occupancy: number
	max_adult_occupancy: number
	adult_required: boolean
	extra_adult_rate: number
	extra_child_rate: number
	extra_infant_rate: number
	package_rate_enabled: boolean
}

export interface ISiteminder {
	name: string
	rates_including_fees: boolean
	room_types: IRoomType[]
}

export function isISiteminder(object: unknown): object is ISiteminder {
	if (typeof object !== "object") return false
	return (
		Object.prototype.hasOwnProperty.call(object, "name") &&
		Object.prototype.hasOwnProperty.call(object, "rates_including_fees") &&
		Object.prototype.hasOwnProperty.call(object, "room_types")
	)
}
