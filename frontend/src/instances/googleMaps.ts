import { Loader } from "@googlemaps/js-api-loader";

import { IGoogleMapsInit, IGoogleMapsDetails } from "@d/interfaces/maps.interface";

function parseMap(googleMapsInit: IGoogleMapsInit): IGoogleMapsDetails {
	const { targetRef, mapOptions, placeId, id } = googleMapsInit;
	const el = document.getElementById(id);
	if (!el) {
		throw new Error("❌ No matching element with id: " + targetRef);
	}
	if (!google) {
		throw new Error("❌ No google!");
	}
	let map: google.maps.Map;
	if (mapOptions) {
		map = new google.maps.Map(el, mapOptions);
	} else {
		map = new google.maps.Map(el);
	}
	if (!map) {
		throw new Error("❌ No map!");
	}
	const service = new google.maps.places.PlacesService(map);
	if (!placeId) {
		throw new Error("❌ No PlaceID");
	} else return { googleMapsInit, map, service };
}

function parseDetails(details: IGoogleMapsDetails): void {
	const { googleMapsInit, map, service } = details;
	const { placeId, markerOptions, routeDestination } = googleMapsInit;

	// PROXY FOR GOOGLE MAP OPENING HOURS
	const setOpeningHours = (openingHours: google.maps.places.OpeningHours | undefined): void => {
		const event = new CustomEvent("openinghours", {
			detail: openingHours,
		});
		if (!document.dispatchEvent(event)) {
			throw new Error("❌ Could not dispatch event with detail:" + event.detail);
		}
	};

	service.getDetails(
		{
			placeId: placeId,
			fields: ["name", "formatted_address", "geometry", "opening_hours", "utc_offset_minutes"],
		},
		function (place, status) {
			try {
				getPlaceDetails(place, status);
			} catch (error) {
				console.error(error);
			}
		}
	);
	const getPlaceDetails = (
		place: google.maps.places.PlaceResult,
		status: google.maps.places.PlacesServiceStatus
	) => {
		if (status !== google.maps.places.PlacesServiceStatus.OK) {
			throw new Error("❌ PlacesServiceStatus not OK!");
		}
		if (!place.geometry) {
			throw new Error("❌ place.geometry is undefined");
		}
		setOpeningHours(place.opening_hours);
		const marker: google.maps.Marker = new google.maps.Marker({
			map: map,
			position: place.geometry.location,
			animation: markerOptions.animation,
			icon: markerOptions.icon,
		});
		const position: google.maps.LatLng | null | undefined = marker.getPosition();
		if (!position) {
			throw new Error("❌ Did not get position from marker");
		}
		map.setCenter(position);
		const infowindow = new google.maps.InfoWindow();
		if (!infowindow) {
			throw new Error("❌ Could not initialize Info window");
		}
		infowindow.setContent(
			"<div style='font-size: 130%;' class='color-dark'><strong>" +
				place.name +
				"</strong><br><br>" +
				place.formatted_address +
				"<br><br>" +
				'<a class="color-dark" href="https://www.google.com/maps/dir/?api=1&destination=' +
				routeDestination +
				'">Reittiohjeet</a></div>'
		);
		google.maps.event.addListener(marker, "click", function () {
			infowindow.open(map, marker);
		});
	};
}

export function googleMapsInit(init: IGoogleMapsInit, loaded: boolean): boolean {
	const { apiKey, libraries, version, language, region } = init;
	if (!loaded) {
		const loader = new Loader({
			apiKey,
			libraries,
			version,
			language,
			region,
		});
		loader.loadCallback((error) => {
			if (error) {
				throw new Error("❌ Error at callback:" + error);
			} else {
				try {
					const details = parseMap(init);
					parseDetails(details);
				} catch (error) {
					throw new Error("❌ Error at parsing map:" + error);
				}
			}
		});
	} else {
		try {
			const details = parseMap(init);
			parseDetails(details);
		} catch (error) {
			throw new Error("❌ Error at parsing map:" + error);
		}
	}
	return true;
}
