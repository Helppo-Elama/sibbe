import { addDays, dateToStringYYYYMMDD } from "@h/dateExtensions"

import {
	carouselMenuImages as menuImages,
	restaurantCarouselImages as carouselImages,
	restaurantImages as images
} from "./restaurant.images"

const serviceUrl: string = process.env.VUE_APP_SERVICE_URL

const createURL = (target: string, days?: number): string => {
	if (target === undefined) throw new Error(`❌ createURL does not have a target set: ${target}`)
	if (target === "lunch") {
		if (days === undefined) {
			throw new Error(`❌ Tried to call createURL(${target}, days) with days = undefined.`)
		}
		const now = new Date()
		const start = dateToStringYYYYMMDD(now)
		const end = dateToStringYYYYMMDD(addDays(now, days))
		return `${serviceUrl}/api/restaurant/lunch?start_date=${start}&end_date=${end}`
	}
	return `${serviceUrl}/api/restaurant/${target}`
}

export { carouselImages, createURL, images, menuImages }
