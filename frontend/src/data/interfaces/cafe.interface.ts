import { isArray } from "lodash";
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

export function isICafeData(object: unknown): object is ICafeData {
	const result = Object.prototype.hasOwnProperty.call(object, "json");
	return result;
}

export type ICafeMenu = Array<ICafeMenuItem>;

export function isICafeMenu(array: unknown): array is ICafeMenu {
	let result = false;
	if (isArray(array)) {
		for (const item of array) {
			if (isICafeMenuItem(item)) result = true;
		}
	}
	return result;
}

interface ICafeMenuItem {
	id: number;
	created_at: string;
	updated_at: string;
	type: string;
	json: Record<string, string>;
}

export function isICafeMenuItem(object: unknown): object is ICafeMenuItem {
	let result = false;
	if (
		Object.prototype.hasOwnProperty.call(object, "id") &&
		Object.prototype.hasOwnProperty.call(object, "created_at") &&
		Object.prototype.hasOwnProperty.call(object, "updated_at") &&
		Object.prototype.hasOwnProperty.call(object, "type") &&
		Object.prototype.hasOwnProperty.call(object, "json")
	) {
		result = true;
	}
	return result;
}
