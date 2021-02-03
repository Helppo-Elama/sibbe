import { IImage } from "../interfaces/images.interface";

//conference
import conferenceImg1 from "@i/originals/conference/conference-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import conferenceWebp1 from "@i/originals/conference/conference-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import conferenceImg2 from "@i/originals/conference/conference-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import conferenceWebp2 from "@i/originals/conference/conference-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

//NOBEL
import nobelImg1 from "@i/originals/conference/nobel-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import nobelWebp1 from "@i/originals/conference/nobel-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import nobelImg2 from "@i/originals/conference/nobel-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import nobelWebp2 from "@i/originals/conference/nobel-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import nobelImg3 from "@i/originals/conference/nobel-3.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import nobelWebp3 from "@i/originals/conference/nobel-3.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

//LABRA
import labraImg1 from "@i/originals/conference/labra-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import labraWebp1 from "@i/originals/conference/labra-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import labraImg2 from "@i/originals/conference/labra-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import labraWebp2 from "@i/originals/conference/labra-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

import conferenceAdditionalImg1 from "@i/originals/conference/conference-additional-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import conferenceAdditionalWebp1 from "@i/originals/conference/conference-additional-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
const conferenceImages: {
  one: IImage;
  two: IImage;
} = {
  one: {
    img: conferenceImg1,
    webp: conferenceWebp1,
    alt: "Villa Sibbe auringossa",
  },
  two: {
    img: conferenceImg2,
    webp: conferenceWebp2,
    alt: "Villa Sibbe auringossa",
  },
};
const conferenceCarouselImages: {
  nobel: Array<IImage>;
  labra: Array<IImage>;
} = {
  nobel: [
    {
      img: nobelImg1,
      webp: nobelWebp1,
      alt: "Kuva Villa Sibben Nobel kokoustilasta",
    },
    {
      img: nobelImg2,
      webp: nobelWebp2,
      alt: "Kuva Villa Sibben Nobel kokoustilasta",
    },
    {
      img: nobelImg3,
      webp: nobelWebp3,
      alt: "Kuva Villa Sibben Nobel kokoustilasta",
    },
  ],
  labra: [
    {
      img: labraImg1,
      webp: labraWebp1,
      alt: "Kuva Villa Sibben Labra kokoustilasta",
    },
    {
      img: labraImg2,
      webp: labraWebp2,
      alt: "Kuva Villa Sibben Labra kokoustilasta",
    },
  ],
};
const conferenceAdditionalImages: Array<IImage> = [
  {
    img: conferenceAdditionalImg1,
    webp: conferenceAdditionalWebp1,
    alt: "Villa Sibben somisteita",
  },
];
export {
  conferenceImages,
  conferenceCarouselImages,
  conferenceAdditionalImages,
};
