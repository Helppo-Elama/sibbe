export interface IGoogleMapsInit {
	apiKey: string
	targetRef: string
	language: string
	region: string
	libraries: Array<"drawing" | "geometry" | "localContext" | "places" | "visualization">
	version: string
	mapOptions: google.maps.MapOptions
	placeId: string
	markerOptions: google.maps.MarkerOptions
	routeDestination: string
	id: string
}
export type IPlaceIds = Record<string, string>
export type IRouteDestinations = Record<string, string>
export type IGoogleMapsMap = google.maps.Map
export type IGoogleMapsService = google.maps.places.PlacesService
export interface IGoogleMapsDetails {
	googleMapsInit: IGoogleMapsInit
	map: google.maps.Map
	service: google.maps.places.PlacesService
}
