import { isArray } from "lodash";

export type IMenu = Array<IMenuItem>;

interface IMenuItem {
	id: number;
	created_at: string;
	updated_at: string;
	type: string;
	json: Record<string, string>;
}

export function isIMenu(array: unknown): array is IMenu {
	let result = true;
	if (isArray(array)) {
		for (const object of array) {
			if (
				!Object.prototype.hasOwnProperty.call(object, "id") &&
				!Object.prototype.hasOwnProperty.call(object, "created_at") &&
				!Object.prototype.hasOwnProperty.call(object, "updated_at") &&
				!Object.prototype.hasOwnProperty.call(object, "type") &&
				!Object.prototype.hasOwnProperty.call(object, "json")
			) {
				result = false;
			}
		}
	}
	return result;
}
