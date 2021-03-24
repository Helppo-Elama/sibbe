import { addDays } from "./dateFunctions";

const getDays = (start, end) => {
	const days = [];
	let day = start;
	while (day <= end) {
		days.push(day.toStringYYYYMMDD(day));
		day = addDays(1);
	}
	return days;
};

export default getDays;
