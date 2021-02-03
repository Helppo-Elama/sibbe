import { IImage } from "./images.interface";
export interface IRoom {
  id: number;
  htmlClass: string;
  breakpoints?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  title: string;
  body: string;
  equipments: { title: string }[];
  images: Array<IImage>;
}

export interface IRoomAdditionalData {
  id: number;
  htmlClass: string;
  title: string;
  breakpoints?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  body: Array<string>;
}

export interface IRooms {
  rooms: Array<IRoom>;
  additional?: Array<IRoomAdditionalData>;
  additionalImages?: Array<IImage>;
}
