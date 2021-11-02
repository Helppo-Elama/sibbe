import { dateToStringYYYYMMDD } from "./dateFunctions"

const url = process.env.MIX_APP_URL
export const buildUrl = (slug) => `${url}/${slug}`

// RESTAURANT
export const getRestaurantLunchUrl = (start, end) =>
	`${url}/restaurant/lunch/lunches?start_date=${dateToStringYYYYMMDD(
		start
	)}&end_date=${dateToStringYYYYMMDD(end)}`

// PORTION
export const getPortionsSearchUrl = (title) => `${url}/portions/search?title=${title}`
export const checkPortionUrl = (title) => `${url}/portions/check?title=${title}`
