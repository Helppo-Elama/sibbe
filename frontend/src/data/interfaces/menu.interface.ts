import { IServiceHours } from "./servicehours.interface"
/* eslint-disable camelcase */

export interface IMenuItem {
	title: string
	allergenic?: string
	body?: string
	ingredients?: string
	price?: string
	price_additional?: string
}

interface IMenuArray {
	id: number
	created_at: string
	updated_at: string
	type: string
	json: Array<IMenuItem>
	icon: string
	date?: string
	hours?: string
	price?: string
	price_additional?: string
}

export type IMenu = Array<IMenuArray>

export interface IPresistentLunch {
	presistentLunch: { enabled: boolean; portions: Array<IMenuItem> }
	serviceHours: IServiceHours
}

export type ILunch = IMenu | IPresistentLunch
