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

export function isIServiceHours(array: unknown): array is IServiceHours {
	let result = true
	if (Array.isArray(array)) {
		array.forEach((object) => {
			if (result === true)
				if (
					!Object.prototype.hasOwnProperty.call(object, "day") &&
					!Object.prototype.hasOwnProperty.call(object, "isOpen") &&
					!Object.prototype.hasOwnProperty.call(object, "open") &&
					!Object.prototype.hasOwnProperty.call(object, "close") &&
					result === true
				) {
					result = false
				}
		})
		return result
	}
	return false
}
