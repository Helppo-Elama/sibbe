export function correctOffset(date: Date, min: number): Date {
	const result = date;
	result.setTime(result.getTime() - min * 60 * 1000);
	return result;
}

export function addDays(date: Date, days: number): Date {
	const result = date;
	result.setDate(result.getDate() + days);
	return result;
}

export function removeDays(date: Date, days: number): Date {
	const result = date;
	result.setDate(result.getDate() - days);
	return result;
}

export function toStringWithOffset(date: Date): string {
	const offset = correctOffset(date, date.getTimezoneOffset());
	const result = offset.toISOString().split("T")[0];
	return result;
}

export function toISOStringWithOffset(date: Date): string {
	const offset = correctOffset(date, date.getTimezoneOffset());
	const result = offset.toISOString();
	return result;
}

export function ISOStringToDate(string: string): Date {
	const b: Array<string | number> = string.split(/\D+/);
	const result = new Date(
		b[0] as number,
		--(b[1] as number),
		b[2] as number,
		b[3] as number,
		b[4] as number,
		b[5] as number,
		b[6] as number
	);
	return result;
}

export function dateToStringYYYYMMDD(date: Date): string {
	const result = new Date(date).toISOString().split("T")[0];
	return result;
}

export function capitalizeFormattedDate(string: string): string {
	const result = string.charAt(0).toUpperCase() + string.slice(1);
	return result;
}
