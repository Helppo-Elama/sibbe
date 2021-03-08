import { IImage } from "../interfaces/images.interface";

//Restaurant
import restaurantHeaderImg from "@i/originals/restaurant/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import restaurantHeaderWebp from "@i/originals/restaurant/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import restaurantHeaderImgCropped from "@i/originals/restaurant/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import restaurantHeaderWebpCropped from "@i/originals/restaurant/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";

const restaurantHeaderImages: {
  normal: IImage;
  cropped: IImage;
  author: { name: string; url: string };
} = {
  normal: {
    img: restaurantHeaderImg,
    webp: restaurantHeaderWebp,
    alt: "Tervetuloa Villa Sibbeen",
  },
  cropped: {
    img: restaurantHeaderImgCropped,
    webp: restaurantHeaderWebpCropped,
    alt: "Tervetuloa Villa Sibbeen",
  },
  author: {
    name: "KivaaTekemistä.fi",
    url: "https://kivaatekemistä.fi/",
  },
};
export { restaurantHeaderImages };
