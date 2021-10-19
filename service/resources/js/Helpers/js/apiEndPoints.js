import { dateToStringYYYYMMDD } from "./dateFunctions"

const url = process.env.MIX_APP_URL
// const Url = `${url}/`;

// RESTAURANT
export const getRestaurantLunchUrl = (start, end) => {
	const result = `${url}/restaurant/lunch/lunches?start_date=${dateToStringYYYYMMDD(
		start
	)}&end_date=${dateToStringYYYYMMDD(end)}`
	return result
}

export const getRestaurantLunchDefaultsUrl = () => {
	const result = `${url}/defaults/restaurant/lunch`
	return result
}

export const postRestaurantLunchDateUrl = () => {
	const result = `${url}/restaurant/lunch/date/post`
	return result
}

export const postRestaurantLunchUrl = () => {
	const result = `${url}/restaurant/lunch/post`
	return result
}

export const deleteRestaurantLunchUrl = () => {
	const result = `${url}/restaurant/lunch/delete`
	return result
}

export const postRestaurantLunchDefaultDaysUrl = () => {
	const result = `${url}/defaults/restaurant/lunch/days/post`
	return result
}

export const postRestaurantItemUrl = () => {
	const result = `${url}/restaurant/menu/post`
	return result
}
export const deleteRestaurantItemUrl = () => {
	const result = `${url}/restaurant/menu/delete`
	return result
}

export const postRestaurantTypeUrl = () => {
	const result = `${url}/restaurant/menu/type/post`
	return result
}

export const deleteRestaurantTypeUrl = () => {
	const result = `${url}/restaurant/menu/type/delete`
	return result
}

// CAFE
export const postCafeItemUrl = () => {
	const result = `${url}/cafe/post`
	return result
}

export const deleteCafeItemUrl = () => {
	const result = `${url}/cafe/delete`
	return result
}

export const postCafeTypeUrl = () => {
	const result = `${url}/cafe/type/post`
	return result
}

export const deleteCafeTypeUrl = () => {
	const result = `${url}/cafe/type/delete`
	return result
}

export const postCafeDataUrl = () => {
	const result = `${url}/cafe/data/post`
	return result
}

// PORTION
export const getPortionsUrl = () => {
	const result = `${url}/portions/portions`
	return result
}
export const postPortionUrl = () => {
	const result = `${url}/portions/portion`
	return result
}
export const getPortionsSearchUrl = (title) => {
	const result = `${url}/portions/search?title=${title}`
	return result
}
export const checkPortionUrl = (title) => {
	const result = `${url}/portions/check?title=${title}`
	return result
}
export const deletePortionUrl = () => {
	const result = `${url}/portions/delete`
	return result
}

// SERVICE HOURS
export const postServiceHoursUrl = () => {
	const result = `${url}/servicehours/servicehour`
	return result
}
