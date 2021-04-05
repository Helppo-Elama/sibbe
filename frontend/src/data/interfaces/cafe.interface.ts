import { IImage } from "./images.interface";
export interface IEmail {
	name: string;
	domain: string;
	tld: string;
}
export interface ICafeCompanyData {
	title: string;
	address: string;
	postalCode: string;
	postalArea: string;
	phone: string;
	companyEmail: IEmail;
	salesEmail: IEmail;
	ytj: string;
	images: Array<IImage>;
}

export interface ICafeData {
	json: Record<string, string>;
}

export function isICafeData(o: any): o is ICafeData {
	return o;
}

export type ICafeMenu = Array<ICafeMenuItem>;

interface ICafeMenuItem {
	id: number;
	created_at: string;
	updated_at: string;
	type: string;
	json: Record<string, string>;
}

export function isICafeMenu(o: any): o is ICafeMenu {
	return o;
}
