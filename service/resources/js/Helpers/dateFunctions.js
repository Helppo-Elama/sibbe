function correctOffset(date) {
	const result = new Date(date);
	result.setTime(result.getTime() - result.getTimezoneOffset() * 60 * 1000);
	return result;
}

function addDays(date, days) {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function removeDays(date, days) {
	const result = new Date(date);
	result.setDate(result.getDate() - days);
	return result;
}

function parseISOString(string) {
	const b = string.split(/\D+/);
	const result = new Date(Date.UTC(b[0], (b[1] -= 1), b[2], b[3], b[4], b[5], b[6]));
	return result;
}

function ISOStringToDate(string) {
	const result = parseISOString(string);
	return result;
}

function dateToStringYYYYMMDD(date) {
	const result = new Date(date).toISOString().split("T")[0];
	return result;
}

function capitalizeFormattedDate(string) {
	const result = string.charAt(0).toUpperCase() + string.slice(1);
	return result;
}

export {
	correctOffset,
	addDays,
	removeDays,
	ISOStringToDate,
	parseISOString,
	dateToStringYYYYMMDD,
	capitalizeFormattedDate,
};
