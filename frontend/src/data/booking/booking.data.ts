import { addDays } from "@h/dateExtensions"

import { IBookingApiUrl, IBookingData, IBookingUrl } from "../interfaces/booking.interface"
import { IRooms } from "../interfaces/rooms.interface"
import { bookingCarouselImages as images } from "./booking.images"

const serviceUrl: string = process.env.VUE_APP_SERVICE_URL

const urlStatic: Record<string, Array<string>> = {
	siteminder: [`${serviceUrl}/proxy.php?start_date=`, "&end_date="],
	// &locale=fi&currency=EUR&items[0][adults]=2&items[0][children]=0&items[0][infants]=0
	directbook: [
		"https://direct-book.com/properties/alarautaoydirect?checkInDate=",
		"&checkOutDate=",
		"&items[0][rateId]=",
		"&locale=fi",
		"currency=EUR&"
	]
}

export const createApiURL = (o: IBookingApiUrl): string => {
	const url = urlStatic.siteminder[0] + o.start + urlStatic.siteminder[1] + o.end
	return url
}
export const createBookingURL = (o: IBookingUrl): string => {
	const url =
		urlStatic.directbook[0] +
		o.start +
		urlStatic.directbook[1] +
		o.end +
		urlStatic.directbook[2] +
		o.id +
		urlStatic.directbook[3] +
		urlStatic.directbook[4]
	return url
}
const bookingData = (): IBookingData => {
	const now = new Date()
	const end = addDays(now, 28)
	const request = {
		start: now.toISOString().split("T")[0],
		end: end.toISOString().split("T")[0]
	}
	const dateRange = { start: now, end }
	return {
		request: {
			url: createApiURL(request)
		},
		dateRange
	}
}

const bookingRooms: IRooms = {
	rooms: [
		{
			id: 0,
			title: "Olavi ja Kaarlo",
			breakpoints: { md: 7 },
			body: "Ihastuttava huone kahdelle, lisävuodemahdollisuudella.<br /><br />Sängyn saa halutessaan parivuoteena tai erillisinä, yhden hengen vuoteina.<br /><br />Kaarlosta avautuu hieno näkymä venesataman suuntaan.",
			equipments: [
				{
					title: "Parivuode tai kaksi yksittäistä sänkyä"
				},
				{
					title: "Lisävuodemahdollisuus"
				}
			],
			images: images.olaviKaarlo
		},
		{
			id: 1,
			breakpoints: { md: 6 },
			title: "Lilja ja Rico",
			body: "Hurmaava huone kahdelle, lisävuodemahdollisuudella.<br /><br />Sängyn saa halutessaan parivuoteena tai erillisinä, yhden hengen vuoteina. Liljasta on näkyvyys kartanon pihapiiriin.",
			equipments: [
				{
					title: "Parivuode tai kaksi yksittäistä sänkyä"
				},
				{
					title: "Lisävuodemahdollisuus"
				}
			],
			images: images.liljaRico
		},
		{
			id: 2,
			title: "Artturi",
			body: "Artturi on suurin huoneemme. Se on nimetty nobelistin itsensä mukaan.<br /><br />Lisämukavuuksina huoneessa on mukava nojatuoli, näkymä isosta ikkunasta kartanon puutarhaan ja erityisen tilava kylpyhuone.",
			equipments: [
				{
					title: "Parivuode tai kaksi yksittäistä sänkyä"
				},
				{
					title: "Lisävuodemahdollisuus"
				}
			],
			images: images.artturi
		},

		{
			id: 3,
			title: "Isäntä",
			body: "Kiehtova huone jopa kolmelle hengelle kotikartanon alakerrassa.<br /><br />Sängyn saa halutessaan parivuoteena tai erillisinä, yhden hengen vuoteina. Ikkunasta avautuu näkymät kartanon pihapiiriin.<br /><br />Muista huoneista poiketen, Isännässä ei ole omaa kylpyhuonetta vaan käytössä on alakerran jaetut WC:t sekä suihku.",
			equipments: [
				{
					title: "Parivuode tai kaksi yksittäistä sänkyä"
				},
				{
					title: "Lisävuode"
				}
			],
			images: images.isanta
		}
	]
}

export { bookingData, bookingRooms }
