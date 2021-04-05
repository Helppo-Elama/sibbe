import { dateToStringYYYYMMDD } from "./dateFunctions";

const url = process.env.MIX_APP_URL;
// const apiUrl = `${url}/api`;

// RESTAURANT
const getRestaurantLunchApiUrl = (start, end) => {
	const restaurantLunchApiUrl = `${url}/restaurant/lunch/authorized?start_date=${dateToStringYYYYMMDD(
		start
	)}&end_date=${dateToStringYYYYMMDD(end)}`;
	return restaurantLunchApiUrl;
};

const postRestaurantLunchDateApiUrl = () => {
	const restaurantLunchDateApiUrl = `${url}/restaurant/lunch/authorized/date`;
	return restaurantLunchDateApiUrl;
};

const postRestaurantLunchApiUrl = () => {
	const restaurantLunchApiUrl = `${url}/restaurant/lunch/authorized/lunch`;
	return restaurantLunchApiUrl;
};

// CAFE

const postCafeItemApiUrl = () => {
	const cafeApiUrl = `${url}/cafe/authorized/item`;
	return cafeApiUrl;
};

const postCafeTypeApiUrl = () => {
	const cafeApiUrl = `${url}/cafe/authorized/type`;
	return cafeApiUrl;
};

const postCafeDataApiUrl = () => {
	const cafeApiUrl = `${url}/cafe/authorized/data`;
	return cafeApiUrl;
};

export {
	getRestaurantLunchApiUrl,
	postRestaurantLunchDateApiUrl,
	postRestaurantLunchApiUrl,
	postCafeItemApiUrl,
	postCafeTypeApiUrl,
	postCafeDataApiUrl,
};
