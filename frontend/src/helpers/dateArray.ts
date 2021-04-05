import "./dateExtensions";

export const getDays = function (start: Date, end: Date) {
	const days: Array<Date> = [];
	let day = start;
	while (day <= end) {
		days.push(day);
		day = day.addDays(1);
	}
	return days;
};

export const getMonth = function (YearAndMonth: { month: number; year: number }) {
	const { month, year } = YearAndMonth;
	const start = new Date(year, month, 1);
	const days = getDays(start, new Date(year, month + 1, 0));
	const result = [];
	for (const day of days) {
		result.push(day.toStringWithOffset());
	}
	return result;
};

export const currentMonth = (): Array<string> => {
	const now = new Date();
	const month = now.getMonth();
	const year = now.getFullYear();
	const days = getDays(now, new Date(year, month + 1, 1));
	const result = [];
	for (const day of days) {
		result.push(day.toStringWithOffset());
	}
	return result;
};
