export type IImageSizes = number[]

export interface IImage {
	img: string
	webp: string
	alt: string
	sizes?: IImageSizes
	author?: IImageAuthor
}
export interface IHeaderImages {
	normal: IImage
	cropped: IImage
	author?: IImageAuthor
}

export interface IImageAuthor {
	name: string
	url?: string
}
