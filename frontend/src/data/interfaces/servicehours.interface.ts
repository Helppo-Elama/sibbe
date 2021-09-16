/* eslint-disable camelcase */
export type IWeekDays =
	| "sunnuntai"
	| "maanantai"
	| "tiistai"
	| "keskiviikko"
	| "torstai"
	| "perjantai"
	| "lauantai"
	| "tänään"

export interface IServiceHour {
	day: IWeekDays
	openToday: boolean
	open: undefined | string
	close: undefined | string
}

export type IServiceHours = Array<IServiceHour>

export type IServiceHoursData = Array<{
	title: string
	closed_until: string | null
	json: IServiceHours
}>
