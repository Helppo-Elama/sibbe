export type IImageSizes = number[];

export interface IImage {
  img: string;
  webp: string;
  alt: string;
  sizes?: IImageSizes;
}
