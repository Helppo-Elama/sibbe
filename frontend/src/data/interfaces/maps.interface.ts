export interface IgoogleMapsInit {
  apiKey: string;
  targetRef: string;
  libraries: Array<
    "drawing" | "geometry" | "localContext" | "places" | "visualization"
  >;
  version: string;
  mapOptions: google.maps.MapOptions;
  placeId: string;
  markerOptions: google.maps.MarkerOptions;
  routeDestination: string;
}
export interface IPlaceIds {
  placeIds: Record<string, string>;
}
export interface IRouteDestinations {
  routes: Record<string, string>;
}

export type IMapOptions = google.maps.MapOptions;
export type IMarkerOptions = google.maps.MarkerOptions;
