import { IImage } from "../interfaces/images.interface";

// Header
import festivityHeaderImg from "@i/originals/festivity/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600";
import festivityHeaderWebp from "@i/originals/festivity/header.jpg?sizes[]=300,sizes[]=400,sizes[]=600&format=webp";
import festivityHeaderImgCropped from "@i/originals/festivity/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048";
import festivityHeaderWebpCropped from "@i/originals/festivity/header-cropped.jpg?sizes[]=800,sizes[]=1024,sizes[]=2048&format=webp";

//festivity

/*
import festivityImg1 from "@i/originals/festivity/festivity-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900";
import festivityWebp1 from "@i/originals/festivity/festivity-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp";
*/

const festivityHeaderImages: { normal: IImage; cropped: IImage } = {
  normal: {
    img: festivityHeaderImg,
    webp: festivityHeaderWebp,
    alt: "Tervetuloa Villa Sibbeen",
  },
  cropped: {
    img: festivityHeaderImgCropped,
    webp: festivityHeaderWebpCropped,
    alt: "Tervetuloa Villa Sibbeen",
  },
};
/*
const festivityImages: Array<IImage> = [
  {
    img: festivityImg1,
    webp: festivityWebp1,
    alt: "Villa Sibbe auringossa",
  },
];
*/
export {
  //festivityImages,
  festivityHeaderImages,
};
