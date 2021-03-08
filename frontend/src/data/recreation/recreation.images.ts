import { IImage } from "../interfaces/images.interface";

// Header
import recreationHeaderImg from "@i/originals/recreation/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import recreationHeaderWebp from "@i/originals/recreation/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import recreationHeaderImgCropped from "@i/originals/recreation/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import recreationHeaderWebpCropped from "@i/originals/recreation/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";

//Recreation

import joensuuntilaImg1 from "@i/originals/recreation/joensuun-tila.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import joensuuntilaWebp1 from "@i/originals/recreation/joensuun-tila.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

import sipoonkorpiImg1 from "@i/originals/recreation/sipoonkorpi.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import sipoonkorpiWebp1 from "@i/originals/recreation/sipoonkorpi.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

import norrkullaImg1 from "@i/originals/recreation/norrkulla.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import norrkullaWebp1 from "@i/originals/recreation/norrkulla.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

import suppailuImg1 from "@i/originals/recreation/suppailu.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import suppailuWebp1 from "@i/originals/recreation/suppailu.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

import beachvolleyImg1 from "@i/originals/recreation/beach-volley.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import beachvolleyWebp1 from "@i/originals/recreation/beach-volley.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

import uimajarviImg1 from "@i/originals/recreation/uimajarvi.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import uimajarviWebp1 from "@i/originals/recreation/uimajarvi.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

import venevuokrausImg1 from "@i/originals/recreation/venevuokraus.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import venevuokrausWebp1 from "@i/originals/recreation/venevuokraus.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";

//CAROUSEL
import carouselImg1 from "@i/originals/recreation/slides/frisbeegolf-1.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import carouselWebp1 from "@i/originals/recreation/slides/frisbeegolf-1.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import carouselImg2 from "@i/originals/recreation/slides/frisbeegolf-2.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import carouselWebp2 from "@i/originals/recreation/slides/frisbeegolf-2.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import carouselImg3 from "@i/originals/recreation/slides/frisbeegolf-3.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import carouselWebp3 from "@i/originals/recreation/slides/frisbeegolf-3.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";

const recreationHeaderImages: { normal: IImage; cropped: IImage } = {
  normal: {
    img: recreationHeaderImg,
    webp: recreationHeaderWebp,
    alt: "Tervetuloa Villa Sibbeen",
  },
  cropped: {
    img: recreationHeaderImgCropped,
    webp: recreationHeaderWebpCropped,
    alt: "Tervetuloa Villa Sibbeen",
  },
};

const recreationImages: Record<string, IImage> = {
  joensuuntila: {
    img: joensuuntilaImg1,
    webp: joensuuntilaWebp1,
    alt: "Joensuun tilan tilukset",
  },
  sipoonkorpi: {
    img: sipoonkorpiImg1,
    webp: sipoonkorpiWebp1,
    alt: "Sipoonkorpimaisemaa",
    author: {
      name: "Miika Silfverberg",
      url: "https://www.flickr.com/photos/29757997@N00",
    },
  },
  norrkulla: {
    img: norrkullaImg1,
    webp: norrkullaWebp1,
    alt: "Norkullalandet",
    author: {
      name: "LPfi",
      url:
        "https://commons.wikimedia.org/wiki/File:Norrkulla-S%C3%B6derkulla_insj%C3%B6_2010.jpg",
    },
  },
  suppailu: {
    img: suppailuImg1,
    webp: suppailuWebp1,
    alt: "Suppailua Joensuun Tilalla",
  },
  uimajarvi: {
    img: uimajarviImg1,
    webp: uimajarviWebp1,
    alt: "Uimajärvi Joensuun Tilalla",
  },
  beachvolley: {
    img: beachvolleyImg1,
    webp: beachvolleyWebp1,
    alt: "Beach Volley Joensuun Tilalla",
  },
  venevuokraus: {
    img: venevuokrausImg1,
    webp: venevuokrausWebp1,
    alt: "Vene- sekä kajakkivuokraus Joensuun Tilalla",
  },
};

const recreationCarouselImages: Record<string, Array<IImage>> = {
  normal: [
    {
      img: carouselImg1,
      webp: carouselWebp1,
      alt: "Frisbeegolfrata",
    },
    {
      img: carouselImg2,
      webp: carouselWebp2,
      alt: "Frisbeegolfrata",
    },
    { img: carouselImg3, webp: carouselWebp3, alt: "Frisbeegolfrata" },
  ],
};

export { recreationImages, recreationHeaderImages, recreationCarouselImages };
