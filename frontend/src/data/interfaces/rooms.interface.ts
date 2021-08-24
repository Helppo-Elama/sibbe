import { IImage } from "./images.interface"

export interface IRoom {
	id: number
	htmlClass?: string
	breakpoints?: {
		xs?: number
		sm?: number
		md?: number
		lg?: number
		xl?: number
	}
	title: string
	body: string
	equipments: { title: string }[]
	images: Array<IImage>
}

export type IRoomAdditionalDataBody = [
	{
		breakpoints?: {
			xs?: number
			sm?: number
			md?: number
			lg?: number
			xl?: number
		}
		type?: "image" | "list" | "text" | "title"
		content?: string | IImage
	}
]

export interface IBreakPoints {
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
}

export interface IRoomAdditionalData {
	id: number
	htmlClass: string
	title: string
	breakpoints?: IBreakPoints
	body: IRoomAdditionalDataBody
}

export interface IRoomsAdditional {
	data: IRoomAdditionalData[]
	image: IImage
}

export interface IRooms {
	rooms: Array<IRoom>
	additional?: IRoomsAdditional
}
