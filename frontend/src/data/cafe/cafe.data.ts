import { cafeCarouselImages as carouselImages, cafeImages as images } from "./cafe.images"

const serviceUrl: string = process.env.VUE_APP_SERVICE_URL

const createURL = (target: string): string => {
	if (target === undefined) throw new Error(`❌ createURL does not have a target set: ${target}`)
	const url = `${serviceUrl}/api/cafe/${target}`
	return url
}

export { carouselImages, createURL, images }
