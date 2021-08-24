export type IWeekDays =
	| "sunnuntai"
	| "maanantai"
	| "tiistai"
	| "keskiviikko"
	| "torstai"
	| "perjantai"
	| "lauantai"

export interface IServiceHour {
	day: IWeekDays
	isOpen: boolean
	open: undefined | string
	close: undefined | string
}

export type IServiceHours = Array<IServiceHour>

export const cafe: IServiceHours = [
	{
		day: "sunnuntai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "maanantai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "tiistai",
		isOpen: false,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "keskiviikko",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "torstai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "perjantai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "lauantai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	}
]

export const restaurant: IServiceHours = [
	{
		day: "sunnuntai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "maanantai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "tiistai",
		isOpen: false,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "keskiviikko",
		isOpen: false,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "torstai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "perjantai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	},
	{
		day: "lauantai",
		isOpen: true,
		open: "12:00",
		close: "17:00"
	}
]
