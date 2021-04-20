import { IPlaceIds, IRouteDestinations } from "./interfaces/maps.interface";
const placeIds: IPlaceIds = {
	villa: "ChIJl5iEI7kEkkYRMlFazWMlsIg",
	cafe: "ChIJMbjOo7kEkkYRO2Hhkn_Tqj0",
	//cafe: "ChIJtbbbu6UEkkYRqhXIZigwRD0", TARKISTUS
};

const markerOptions: google.maps.MarkerOptions = {
	animation: 2,
	icon: "/img/maps/villa-sibbe-map-icon.png",
};

const mapOptions: google.maps.MapOptions = {
	zoomControlOptions: {
		style: 1,
	},
	zoom: 13,
	styles: [
		{
			featureType: "poi",
			stylers: [
				{
					visibility: "off",
				},
			],
		},
	],
};
const routeDestination: IRouteDestinations = {
	villa: "Villa+Sibbe",
	cafe: "Cafe+Sibbe",
};

export { placeIds, mapOptions, markerOptions, routeDestination };
