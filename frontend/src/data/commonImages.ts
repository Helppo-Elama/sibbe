import { IImage } from "./interfaces/images.interface";

//HEADER
import headerImg from "@i/originals/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import headerWebp from "@i/originals/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import headerImgCropped from "@i/originals/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import headerWebpCropped from "@i/originals/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";

const headerImages: Record<string, IImage> = {
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

export { headerImages };
