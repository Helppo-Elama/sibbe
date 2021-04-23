export interface IRestaurantData {
	json: Record<string, string>;
}

export function isIRestaurantData(object: unknown): object is IRestaurantData {
	const result = Object.prototype.hasOwnProperty.call(object, "json");
	return result;
}
