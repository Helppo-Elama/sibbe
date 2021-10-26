import {
	carouselMenuImages as menuImages,
	restaurantCarouselImages as carouselImages,
	restaurantImages as images
} from "./restaurant.images"

const serviceUrl: string = process.env.VUE_APP_SERVICE_URL

const createURL = (): string => `${serviceUrl}/api/restaurant`

export { carouselImages, createURL, images, menuImages }
