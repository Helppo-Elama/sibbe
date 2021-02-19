import { IImage } from "../interfaces/images.interface";

//booking
import bookingImg1 from "@i/originals/booking/booking-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import bookingWebp1 from "@i/originals/booking/booking-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import { accommodationCarouselImages as images } from "@d/accommodation/accommodation.images";

const bookingImages: {
  one: IImage;
} = {
  one: {
    img: bookingImg1,
    webp: bookingWebp1,
    alt: "Villa Sibbe auringossa",
  },
};

const bookingCarouselImages: Record<string, Array<IImage>> = {
  artturi: [
    {
      ...images.artturi[0],
    },
    {
      ...images.artturi[1],
    },
  ],
  liljaRico: [{ ...images.lilja[0] }, { ...images.rico[0] }],
  olaviKaarlo: [
    {
      ...images.olavi[0],
    },
    {
      ...images.kaarlo[0],
    },
  ],
  isanta: [
    {
      ...images.isanta[0],
    },
    {
      ...images.isanta[1],
    },
  ],
};

export { bookingImages, bookingCarouselImages };
