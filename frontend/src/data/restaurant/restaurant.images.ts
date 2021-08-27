/* eslint-disable import/no-duplicates */
// RESTAURANT CAROUSEL
import restaurantCarouselImg1 from "@i/originals/restaurant/carousel-1.jpg?sizes[]=300,sizes[]=600"
import restaurantCarouselWebp1 from "@i/originals/restaurant/carousel-1.jpg?sizes[]=300,sizes[]=600&format=webp"
import restaurantCarouselCroppedImg1 from "@i/originals/restaurant/carousel-1-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048"
import restaurantCarouselCroppedWebp1 from "@i/originals/restaurant/carousel-1-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp"
import restaurantCarouselImg2 from "@i/originals/restaurant/carousel-2.jpg?sizes[]=300,sizes[]=600"
import restaurantCarouselWebp2 from "@i/originals/restaurant/carousel-2.jpg?sizes[]=300,sizes[]=600&format=webp"
import restaurantCarouselCroppedImg2 from "@i/originals/restaurant/carousel-2-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048"
import restaurantCarouselCroppedWebp2 from "@i/originals/restaurant/carousel-2-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp"
import restaurantCarouselImg3 from "@i/originals/restaurant/carousel-3.jpg?sizes[]=300,sizes[]=600"
import restaurantCarouselWebp3 from "@i/originals/restaurant/carousel-3.jpg?sizes[]=300,sizes[]=600&format=webp"
import restaurantCarouselCroppedImg3 from "@i/originals/restaurant/carousel-3-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048"
import restaurantCarouselCroppedWebp3 from "@i/originals/restaurant/carousel-3-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp"
// IMAGES
import restaurantImg1 from "@i/originals/restaurant/restaurant-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import restaurantWebp1 from "@i/originals/restaurant/restaurant-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import restaurantImg2 from "@i/originals/restaurant/restaurant-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import restaurantWebp2 from "@i/originals/restaurant/restaurant-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"

import { IImage } from "../interfaces/images.interface"

const restaurantCarouselImages: { normal: Array<IImage>; cropped: Array<IImage> } = {
	normal: [
		{
			img: restaurantCarouselImg1,
			webp: restaurantCarouselWebp1,
			alt: "Sibben kattaus"
		},
		{
			img: restaurantCarouselImg2,
			webp: restaurantCarouselWebp2,
			alt: "Sibben terassi"
		},
		{
			img: restaurantCarouselImg3,
			webp: restaurantCarouselWebp3,
			alt: "Sibben henkilökunta toivottaa tervetulleeksi!"
		}
	],
	cropped: [
		{
			img: restaurantCarouselCroppedImg1,
			webp: restaurantCarouselCroppedWebp1,
			alt: "Sibben kattaus"
		},
		{
			img: restaurantCarouselCroppedImg2,
			webp: restaurantCarouselCroppedWebp2,
			alt: "Sibben terassi"
		},
		{
			img: restaurantCarouselCroppedImg3,
			webp: restaurantCarouselCroppedWebp3,
			alt: "Sibben henkilökunta toivottaa tervetulleeksi!"
		}
	]
}
const restaurantImages: {
	one: IImage
	two: IImage
} = {
	one: {
		img: restaurantImg1,
		webp: restaurantWebp1,
		alt: "Villa Sibben kattausta"
	},
	two: {
		img: restaurantImg2,
		webp: restaurantWebp2,
		alt: "Villa Sibben Milla ja Elina"
	}
}
export { restaurantCarouselImages, restaurantImages }
