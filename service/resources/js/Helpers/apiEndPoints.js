import { dateToStringYYYYMMDD } from "./dateFunctions";

const url = process.env.MIX_APP_URL;
// const apiUrl = `${url}/api`;

const getRestaurantLunchApiUrl = (start, end) => {
	const restaurantLunchApiUrl =
		`${url}/restaurant/lunch/authorized` +
		`?start_date=${dateToStringYYYYMMDD(start)}&end_date=${dateToStringYYYYMMDD(end)}`;
	return restaurantLunchApiUrl;
};

const postRestaurantLunchApiUrl = () => {
	const restaurantLunchApiUrl = `${url}/restaurant/lunch/authorized`;
	return restaurantLunchApiUrl;
};

export { getRestaurantLunchApiUrl, postRestaurantLunchApiUrl };
