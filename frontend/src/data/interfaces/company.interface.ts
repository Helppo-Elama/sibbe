import { IImage } from "./images.interface";
export interface IEmail {
  name: string;
  domain: string;
  tld: string;
}
export interface ICompanyData {
  title: string;
  address: string;
  postalCode: string;
  postalArea: string;
  phone: string;
  companyEmail: IEmail;
  salesEmail: IEmail;
  ytj: string;
  images: Array<IImage>;
  reservationUrl: string;
  socialUrls: Record<string, string>;
}
