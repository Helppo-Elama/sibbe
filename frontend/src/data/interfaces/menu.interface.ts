export type IMenu = Array<IMenuArray>;

interface IMenuArray {
	id: number;
	created_at: string;
	updated_at: string;
	type: string;
	json: Array<IMenuItem>;
	icon: string;
	date?: string;
	hours?: string;
	price?: string;
}

export interface IMenuItem {
	title: string;
	allergenic?: string;
	body?: string;
	ingredients?: string;
	price?: string;
}

export function isIMenu(array: unknown): array is IMenu {
	let result = false;
	if (Array.isArray(array)) {
		for (const object of array) {
			if (!Object.prototype.hasOwnProperty.call(object, "id")) throw "❌ No id in IMenu";
			else if (!Object.prototype.hasOwnProperty.call(object, "created_at"))
				throw "❌ No created_at in IMenu";
			else if (!Object.prototype.hasOwnProperty.call(object, "updated_at"))
				throw "❌ No updated_at in IMenu";
			else if (!Object.prototype.hasOwnProperty.call(object, "type")) throw "❌ No type in IMenu";
			else if (!Object.prototype.hasOwnProperty.call(object, "json")) throw "❌ No json in IMenu";
			else result = true;
		}
	}
	return result;
}
