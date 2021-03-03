import { IImage } from "../interfaces/images.interface";

// Header
import recreationHeaderImg from "@i/originals/recreation/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import recreationHeaderWebp from "@i/originals/recreation/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import recreationHeaderImgCropped from "@i/originals/recreation/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import recreationHeaderWebpCropped from "@i/originals/recreation/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";

//recreation

/*
import recreationImg1 from "@i/originals/recreation/recreation-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import recreationWebp1 from "@i/originals/recreation/recreation-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
*/

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
/*
const recreationImages: Array<IImage> = [
  {
    img: recreationImg1,
    webp: recreationWebp1,
    alt: "Villa Sibbe auringossa",
  },
];
*/
export {
  //recreationImages,
  recreationHeaderImages,
};
