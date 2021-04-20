export interface IGoogleMapsInit {
	apiKey: string;
	targetRef: string;
	language: string;
	region: string;
	libraries: Array<"drawing" | "geometry" | "localContext" | "places" | "visualization">;
	version: string;
	mapOptions: google.maps.MapOptions;
	placeId: string;
	markerOptions: google.maps.MarkerOptions;
	routeDestination: string;
	id: string;
}
export type IPlaceIds = Record<string, string>;
export type IRouteDestinations = Record<string, string>;
export type IGoogleMapsMap = google.maps.Map;
export type IGoogleMapsService = google.maps.places.PlacesService;
export interface IGoogleMapsDetails {
	googleMapsInit: IGoogleMapsInit;
	map: google.maps.Map;
	service: google.maps.places.PlacesService;
}
export type IOpeningHours = google.maps.places.OpeningHours;

export interface IOpeningHoursEvent extends Event {
	detail: IOpeningHours;
}
export function isIOpeningHoursEvent(object: unknown): object is IOpeningHoursEvent {
	let result = false;
	if (object instanceof CustomEvent) {
		const { detail } = object;
		if (
			Object.prototype.hasOwnProperty.call(detail, "periods") &&
			Object.prototype.hasOwnProperty.call(detail, "weekday_text")
		) {
			result = true;
		}
	}
	return result;
}
