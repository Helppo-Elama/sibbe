import { IImage } from "./images.interface"

export interface IEmail {
	name: string
	domain: string
	tld: string
}
export interface ICafeCompanyData {
	title: string
	address: string
	postalCode: string
	postalArea: string
	phone: string
	companyEmail: IEmail
	salesEmail: IEmail
	ytj: string
	images: Array<IImage>
}

export interface ICafeData {
	json: Record<string, string>
}

export function isICafeData(object: unknown): object is ICafeData {
	const result = Object.prototype.hasOwnProperty.call(object, "json")
	return result
}
