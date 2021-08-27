import { addDays, dateToStringYYYYMMDD } from "@h/dateExtensions"

import {
	restaurantCarouselImages as carouselImages,
	restaurantImages as images
} from "./restaurant.images"

const serviceUrl: string = process.env.VUE_APP_SERVICE_URL

const createURL = (target: string): string | undefined => {
	let result: string
	if (target === "lunch") {
		const now = new Date()
		const start = dateToStringYYYYMMDD(now)
		const end = dateToStringYYYYMMDD(addDays(now, 5))
		result = `${serviceUrl}/api/restaurant/lunch?start_date=${start}&end_date=${end}`
	} else {
		result = `${serviceUrl}/api/restaurant/${target}`
	}
	return result
}

export { carouselImages, createURL, images }
