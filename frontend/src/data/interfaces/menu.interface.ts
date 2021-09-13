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

export function isIMenu(array: unknown): array is IMenu {
	let result = false
	if (Array.isArray(array)) {
		array.forEach((object) => {
			if (!Object.prototype.hasOwnProperty.call(object, "id")) throw new Error("❌ No id in IMenu")
			else if (!Object.prototype.hasOwnProperty.call(object, "created_at"))
				throw new Error("❌ No created_at in IMenu")
			else if (!Object.prototype.hasOwnProperty.call(object, "updated_at"))
				throw new Error("❌ No updated_at in IMenu")
			else if (!Object.prototype.hasOwnProperty.call(object, "type"))
				throw new Error("❌ No type in IMenu")
			else if (!Object.prototype.hasOwnProperty.call(object, "json"))
				throw new Error("❌ No json in IMenu")
			else result = true
		})
	}
	return result
}
