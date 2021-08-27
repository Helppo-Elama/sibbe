/* eslint-disable import/no-duplicates */
// Header
import { accommodationRoomsCarouselImages as images } from "@d/accommodation/accommodation.images"
import { IHeaderImages, IImage } from "@d/interfaces/images.interface"
// booking
import bookingImg1 from "@i/originals/booking/booking-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import bookingWebp1 from "@i/originals/booking/booking-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import bookingHeaderImg from "@i/originals/booking/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600"
import bookingHeaderWebp from "@i/originals/booking/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp"
import bookingHeaderImgCropped from "@i/originals/booking/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048"
import bookingHeaderWebpCropped from "@i/originals/booking/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp"

const bookingHeaderImages: IHeaderImages = {
	normal: {
		img: bookingHeaderImg,
		webp: bookingHeaderWebp,
		alt: "Tervetuloa Villa Sibbeen"
	},
	cropped: {
		img: bookingHeaderImgCropped,
		webp: bookingHeaderWebpCropped,
		alt: "Tervetuloa Villa Sibbeen"
	},
	author: {
		name: "KivaaTekemistä.fi",
		url: "https://kivaatekemistä.fi/"
	}
}

const bookingImages: {
	one: IImage
} = {
	one: {
		img: bookingImg1,
		webp: bookingWebp1,
		alt: "Villa Sibbe auringossa"
	}
}

const bookingCarouselImages: Record<string, Array<IImage>> = {
	artturi: [
		{
			...images.artturi[0]
		},
		{
			...images.artturi[1]
		}
	],
	liljaRico: [{ ...images.lilja[0] }, { ...images.rico[0] }],
	olaviKaarlo: [
		{
			...images.olavi[0]
		},
		{
			...images.kaarlo[0]
		}
	],
	isanta: [
		{
			...images.isanta[0]
		},
		{
			...images.isanta[1]
		}
	]
}

export { bookingCarouselImages, bookingHeaderImages, bookingImages }
