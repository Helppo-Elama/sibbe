import { addDays } from "./dateExtensions"

export const getDays = (start: Date, end: Date): Array<Date> => {
	const days: Array<Date> = []
	let day = start
	while (day <= end) {
		days.push(day)
		day = addDays(day, 1)
	}
	return days
}

export const getMonth = (YearAndMonth: { month: number; year: number }): Array<string> => {
	const { month, year } = YearAndMonth
	const start = new Date(year, month, 1)
	const days = getDays(start, new Date(year, month + 1, 0))
	const result: string[] = []
	days.forEach((day) => result.push(day.toISOString()))
	return result
}

export const currentMonth = (): Array<string> => {
	const now = new Date()
	const month = now.getMonth()
	const year = now.getFullYear()
	const days = getDays(now, new Date(year, month + 1, 1))
	const result: string[] = []
	days.forEach((day) => result.push(day.toISOString()))
	return result
}
