import { IImage } from "../interfaces/images.interface";

//CAFE
import cafeImg1 from "@i/originals/cafe/cafe-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import cafeWebp1 from "@i/originals/cafe/cafe-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

//CAFE CAROUSEL
import cafeCarouselImg1 from "@i/originals/cafe/carousel-1.jpg?sizes[]=300,sizes[]=600";
import cafeCarouselWebp1 from "@i/originals/cafe/carousel-1.jpg?sizes[]=300,sizes[]=600&format=webp";
import cafeCarouselImg2 from "@i/originals/cafe/carousel-2.jpg?sizes[]=300,sizes[]=600";
import cafeCarouselWebp2 from "@i/originals/cafe/carousel-2.jpg?sizes[]=300,sizes[]=600&format=webp";
import cafeCarouselImg3 from "@i/originals/cafe/carousel-3.jpg?sizes[]=300,sizes[]=600";
import cafeCarouselWebp3 from "@i/originals/cafe/carousel-3.jpg?sizes[]=300,sizes[]=600&format=webp";

import cafeCarouselCroppedImg1 from "@i/originals/cafe/carousel-1-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import cafeCarouselCroppedWebp1 from "@i/originals/cafe/carousel-1-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";
import cafeCarouselCroppedImg2 from "@i/originals/cafe/carousel-2-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import cafeCarouselCroppedWebp2 from "@i/originals/cafe/carousel-2-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";
import cafeCarouselCroppedImg3 from "@i/originals/cafe/carousel-3-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import cafeCarouselCroppedWebp3 from "@i/originals/cafe/carousel-3-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";

const cafeImages: {
  one: IImage;
} = {
  one: {
    img: cafeImg1,
    webp: cafeWebp1,
    alt: "Cafe Sibbe koristelua",
  },
};

const cafeCarouselImages: { normal: Array<IImage>; cropped: Array<IImage> } = {
  normal: [
    {
      img: cafeCarouselImg1,
      webp: cafeCarouselWebp1,
      alt: "Cafe Sibbestä ilmakuva",
    },
    {
      img: cafeCarouselImg2,
      webp: cafeCarouselWebp2,
      alt: "Rantalentopalloa kahvilan lähellä",
    },
    {
      img: cafeCarouselImg3,
      webp: cafeCarouselWebp3,
      alt: "Pitäiskös suppailla?",
    },
  ],
  cropped: [
    {
      img: cafeCarouselCroppedImg1,
      webp: cafeCarouselCroppedWebp1,
      alt: "Villa Sibben julkisivu",
    },
    {
      img: cafeCarouselCroppedImg2,
      webp: cafeCarouselCroppedWebp2,
      alt: "Villa Sibben etupihaa",
    },
    {
      img: cafeCarouselCroppedImg3,
      webp: cafeCarouselCroppedWebp3,
      alt: "Hiekkaleikit kesken",
    },
  ],
};
export { cafeImages, cafeCarouselImages };
