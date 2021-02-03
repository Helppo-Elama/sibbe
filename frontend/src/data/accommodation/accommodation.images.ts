import { IImage } from "../interfaces/images.interface";

//ACCOMMODATION
import accommodationImg1 from "@i/originals/accommodation/accommodation-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import accommodationWebp1 from "@i/originals/accommodation/accommodation-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

//Artturi
import artturiImg1 from "@i/originals/accommodation/artturi-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import artturiWebp1 from "@i/originals/accommodation/artturi-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import artturiImg2 from "@i/originals/accommodation/artturi-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import artturiWebp2 from "@i/originals/accommodation/artturi-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
//Lilja
import liljaImg1 from "@i/originals/accommodation/lilja-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import liljaWebp1 from "@i/originals/accommodation/lilja-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import liljaImg2 from "@i/originals/accommodation/lilja-2.png?sizes[]=300,sizes[]=600,sizes[]=900&format=png";
import liljaWebp2 from "@i/originals/accommodation/lilja-2.png?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
//Kaarlo
import kaarloImg1 from "@i/originals/accommodation/kaarlo-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import kaarloWebp1 from "@i/originals/accommodation/kaarlo-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import kaarloImg2 from "@i/originals/accommodation/kaarlo-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import kaarloWebp2 from "@i/originals/accommodation/kaarlo-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
//Olavi
import olaviImg1 from "@i/originals/accommodation/olavi-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import olaviWebp1 from "@i/originals/accommodation/olavi-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import olaviImg2 from "@i/originals/accommodation/olavi-2.png?sizes[]=300,sizes[]=600,sizes[]=900&format=png";
import olaviWebp2 from "@i/originals/accommodation/olavi-2.png?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
//Rico
import ricoImg1 from "@i/originals/accommodation/rico-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import ricoWebp1 from "@i/originals/accommodation/rico-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import ricoImg2 from "@i/originals/accommodation/rico-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import ricoWebp2 from "@i/originals/accommodation/rico-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
//Isäntä
import isantaImg1 from "@i/originals/accommodation/isanta-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import isantaWebp1 from "@i/originals/accommodation/isanta-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import isantaImg2 from "@i/originals/accommodation/isanta-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import isantaWebp2 from "@i/originals/accommodation/isanta-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
//Labra
import labraImg1 from "@i/originals/accommodation/labra-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import labraWebp1 from "@i/originals/accommodation/labra-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
import labraImg2 from "@i/originals/accommodation/labra-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import labraWebp2 from "@i/originals/accommodation/labra-2.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

import accommodationAdditionalImg1 from "@i/originals/accommodation/accommodation-additional-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import accommodationAdditionalWebp1 from "@i/originals/accommodation/accommodation-additional-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

const accommodationImages: {
  one: IImage;
} = {
  one: {
    img: accommodationImg1,
    webp: accommodationWebp1,
    alt: "Villa Sibbe auringossa",
  },
};
const accommodationCarouselImages: {
  artturi: Array<IImage>;
  lilja: Array<IImage>;
  kaarlo: Array<IImage>;
  olavi: Array<IImage>;
  rico: Array<IImage>;
  isanta: Array<IImage>;
  labra: Array<IImage>;
} = {
  artturi: [
    { img: artturiImg1, webp: artturiWebp1, alt: "Villa Sibben Artturihuone" },
    { img: artturiImg2, webp: artturiWebp2, alt: "Villa Sibben Artturihuone" },
  ],
  lilja: [
    { img: liljaImg1, webp: liljaWebp1, alt: "Villa Sibben Liljahuone" },
    { img: liljaImg2, webp: liljaWebp2, alt: "Villa Sibben Liljahuone" },
  ],
  kaarlo: [
    {
      img: kaarloImg1,
      webp: kaarloWebp1,
      alt: "Kuva Villa Sibben Kaarlohuoneesta",
    },
    {
      img: kaarloImg2,
      webp: kaarloWebp2,
      alt: "Kuva Villa Sibben Kaarlohuoneesta",
    },
  ],
  olavi: [
    {
      img: olaviImg1,
      webp: olaviWebp1,
      alt: "Kuva Villa Sibben Olavihuoneesta",
    },
    {
      img: olaviImg2,
      webp: olaviWebp2,
      alt: "Kuva Villa Sibben Olavihuoneesta",
    },
  ],
  rico: [
    {
      img: ricoImg1,
      webp: ricoWebp1,
      alt: "Kuva Villa Sibben Ricohuoneesta",
    },
    {
      img: ricoImg2,
      webp: ricoWebp2,
      alt: "Kuva Villa Sibben Ricohuoneesta",
    },
  ],
  isanta: [
    {
      img: isantaImg1,
      webp: isantaWebp1,
      alt: "Kuva Villa Sibben Isäntähuoneesta",
    },
    {
      img: isantaImg2,
      webp: isantaWebp2,
      alt: "Kuva Villa Sibben Isäntähuoneesta",
    },
  ],
  labra: [
    {
      img: labraImg1,
      webp: labraWebp1,
      alt: "Kuva Villa Sibben Labra oleskelutilasta",
    },
    {
      img: labraImg2,
      webp: labraWebp2,
      alt: "Kuva Villa Sibben Labra oleskelutilasta",
    },
  ],
};
const accommodationAdditionalImages: Array<IImage> = [
  {
    img: accommodationAdditionalImg1,
    webp: accommodationAdditionalWebp1,
    alt: "Villa Sibben somisteita",
  },
];
export {
  accommodationImages,
  accommodationCarouselImages,
  accommodationAdditionalImages,
};
