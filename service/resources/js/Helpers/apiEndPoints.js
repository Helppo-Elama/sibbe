import { dateToStringYYYYMMDD } from "./dateFunctions";

const url = process.env.MIX_APP_URL;
// const apiUrl = `${url}/api`;

// RESTAURANT
const getRestaurantLunchApiUrl = (start, end) => {
	const result = `${url}/restaurant/lunch/authorized?start_date=${dateToStringYYYYMMDD(
		start
	)}&end_date=${dateToStringYYYYMMDD(end)}`;
	return result;
};

const postRestaurantLunchDateApiUrl = () => {
	const result = `${url}/restaurant/lunch/authorized/date`;
	return result;
};

const postRestaurantLunchApiUrl = () => {
	const result = `${url}/restaurant/lunch/authorized/lunch`;
	return result;
};

const postRestaurantItemApiUrl = () => {
	const result = `${url}/restaurant/menu/authorized/item`;
	return result;
};

const postRestaurantTypeApiUrl = () => {
	const result = `${url}/restaurant/menu/authorized/type`;
	return result;
};

const postRestaurantDataApiUrl = () => {
	const result = `${url}/restaurant/menu/authorized/data`;
	return result;
};

// CAFE
const postCafeItemApiUrl = () => {
	const result = `${url}/cafe/authorized/item`;
	return result;
};

const postCafeTypeApiUrl = () => {
	const result = `${url}/cafe/authorized/type`;
	return result;
};

const postCafeDataApiUrl = () => {
	const result = `${url}/cafe/authorized/data`;
	return result;
};

export {
	getRestaurantLunchApiUrl,
	postRestaurantLunchDateApiUrl,
	postRestaurantLunchApiUrl,
	postRestaurantItemApiUrl,
	postRestaurantTypeApiUrl,
	postRestaurantDataApiUrl,
	postCafeItemApiUrl,
	postCafeTypeApiUrl,
	postCafeDataApiUrl,
};
