export function addDays(date: Date, days: number): Date {
	const result = new Date(date)
	result.setDate(result.getDate() + days)
	return result
}

export function removeDays(date: Date, days: number): Date {
	const result = new Date(date)
	result.setDate(result.getDate() - days)
	return result
}

export function ISOStringToDate(string: string): Date {
	const b: Array<string | number> = string.split(/\D+/)
	const result = new Date(
		b[0] as number,
		((b[1] as number) -= 1),
		b[2] as number,
		b[3] as number,
		b[4] as number,
		b[5] as number,
		b[6] as number
	)
	return result
}

export function dateToStringYYYYMMDD(date: Date): string {
	const result = new Date(date).toISOString().split("T")[0]
	return result
}
