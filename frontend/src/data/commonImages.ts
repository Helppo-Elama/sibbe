import { IImage } from "./interfaces/images.interface";

//HEADER
import headerImg from "@i/originals/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import headerWebp from "@i/originals/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import headerImgCropped from "@i/originals/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import headerWebpCropped from "@i/originals/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";

//CAROUSEL
import carouselImg1 from "@i/originals/slides/villa-sibbe.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import carouselWebp1 from "@i/originals/slides/villa-sibbe.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import carouselImg2 from "@i/originals/slides/ville-sibbe-etupiha-piilossa.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import carouselWebp2 from "@i/originals/slides/ville-sibbe-etupiha-piilossa.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import carouselImg3 from "@i/originals/slides/hiekka-leikki.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import carouselWebp3 from "@i/originals/slides/hiekka-leikki.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import carouselImg4 from "@i/originals/slides/huone-8.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import carouselWebp4 from "@i/originals/slides/huone-8.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";

import carouselCroppedImg1 from "@i/originals/slides/villa-sibbe-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import carouselCroppedWebp1 from "@i/originals/slides/villa-sibbe-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";
import carouselCroppedImg2 from "@i/originals/slides/ville-sibbe-etupiha-piilossa-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import carouselCroppedWebp2 from "@i/originals/slides/ville-sibbe-etupiha-piilossa-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";
import carouselCroppedImg3 from "@i/originals/slides/hiekka-leikki-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import carouselCroppedWebp3 from "@i/originals/slides/hiekka-leikki-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";
import carouselCroppedImg4 from "@i/originals/slides/huone-8-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import carouselCroppedWebp4 from "@i/originals/slides/huone-8-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";

const headerImages: { normal: IImage; cropped: IImage } = {
  normal: {
    img: headerImg,
    webp: headerWebp,
    alt: "Tervetuloa Villa Sibbeen",
  },
  cropped: {
    img: headerImgCropped,
    webp: headerWebpCropped,
    alt: "Tervetuloa Villa Sibbeen",
  },
};

const carouselImages: { normal: Array<IImage>; cropped: Array<IImage> } = {
  normal: [
    {
      img: carouselImg1,
      webp: carouselWebp1,
      alt: "Villa Sibben julkisivu",
    },
    {
      img: carouselImg2,
      webp: carouselWebp2,
      alt: "Villa Sibben etupihaa",
    },
    { img: carouselImg3, webp: carouselWebp3, alt: "Hiekkaleikit kesken" },
    { img: carouselImg4, webp: carouselWebp4, alt: "Huonekuva" },
  ],
  cropped: [
    {
      img: carouselCroppedImg1,
      webp: carouselCroppedWebp1,
      alt: "Villa Sibben julkisivu",
    },
    {
      img: carouselCroppedImg2,
      webp: carouselCroppedWebp2,
      alt: "Villa Sibben etupihaa",
    },
    {
      img: carouselCroppedImg3,
      webp: carouselCroppedWebp3,
      alt: "Hiekkaleikit kesken",
    },
    { img: carouselCroppedImg4, webp: carouselCroppedWebp4, alt: "Huonekuva" },
  ],
};

export { headerImages, carouselImages };
