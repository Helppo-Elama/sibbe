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
// RESTAURANT MENU CAROUSEL
import carouselMenuImg1 from "@i/originals/restaurant/carousel-menu-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import carouselMenuWebp1 from "@i/originals/restaurant/carousel-menu-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import carouselMenuImg2 from "@i/originals/restaurant/carousel-menu-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import carouselMenuWebp2 from "@i/originals/restaurant/carousel-menu-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import carouselMenuImg3 from "@i/originals/restaurant/carousel-menu-3.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import carouselMenuWebp3 from "@i/originals/restaurant/carousel-menu-3.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import carouselMenuImg4 from "@i/originals/restaurant/carousel-menu-4.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import carouselMenuWebp4 from "@i/originals/restaurant/carousel-menu-4.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
// RESTAURANT SMALL CAROUSEL
import restaurantImg1 from "@i/originals/restaurant/restaurant-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import restaurantWebp1 from "@i/originals/restaurant/restaurant-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import restaurantImg2 from "@i/originals/restaurant/restaurant-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import restaurantWebp2 from "@i/originals/restaurant/restaurant-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import restaurantImg3 from "@i/originals/restaurant/restaurant-3.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import restaurantWebp3 from "@i/originals/restaurant/restaurant-3.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import restaurantImg4 from "@i/originals/restaurant/restaurant-4.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import restaurantWebp4 from "@i/originals/restaurant/restaurant-4.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import restaurantImg5 from "@i/originals/restaurant/restaurant-5.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import restaurantWebp5 from "@i/originals/restaurant/restaurant-5.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"
import restaurantImg6 from "@i/originals/restaurant/restaurant-6.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import restaurantWebp6 from "@i/originals/restaurant/restaurant-6.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"

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
const restaurantImages: Array<IImage> = [
	{
		img: restaurantImg1,
		webp: restaurantWebp1,
		alt: "Villa Sibben kattausta"
	},
	{
		img: restaurantImg2,
		webp: restaurantWebp2,
		alt: "Villa Sibben lihapullat"
	},
	{
		img: restaurantImg3,
		webp: restaurantWebp3,
		alt: "Villa Sibben kattausta"
	},
	{
		img: restaurantImg4,
		webp: restaurantWebp4,
		alt: "Villa Sibben keittiö"
	},
	{
		img: restaurantImg5,
		webp: restaurantWebp5,
		alt: "Villa Sibben jälkkäri"
	},
	{
		img: restaurantImg6,
		webp: restaurantWebp6,
		alt: "Villa Sibben kattausta"
	}
]
const carouselMenuImages: Array<IImage> = [
	{
		img: carouselMenuImg1,
		webp: carouselMenuWebp1,
		alt: "Villa Sibben caesar salaatti"
	},
	{
		img: carouselMenuImg2,
		webp: carouselMenuWebp2,
		alt: "Villa Sibben pippuripihvi"
	},
	{
		img: carouselMenuImg3,
		webp: carouselMenuWebp3,
		alt: "Villa Sibben lohi"
	},
	{
		img: carouselMenuImg4,
		webp: carouselMenuWebp4,
		alt: "Villa Sibben kalakeitto"
	}
]
export { carouselMenuImages, restaurantCarouselImages, restaurantImages }
