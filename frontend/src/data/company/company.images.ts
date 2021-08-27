/* eslint-disable import/no-duplicates */
// company
import companyImg1 from "@i/originals/company/company-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900"
import companyWebp1 from "@i/originals/company/company-1.jpg?sizes[]=300,sizes[]=600,sizes[]=900&format=webp"

import { IImage } from "../interfaces/images.interface"

const companyImages: Array<IImage> = [
	{
		img: companyImg1,
		webp: companyWebp1,
		alt: "Villa Sibbe auringossa"
	}
]
export default companyImages
