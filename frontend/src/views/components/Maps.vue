<template>
	<div class="map-responsive" ref="map"></div>
</template>

<script lang="ts">
import { mapOptions, placeIds, markerOptions, routeDestination } from "@d/maps";
import { googleInit } from "@mix/google.init";
import { IgoogleMapsInit } from "@d/interfaces/maps.interface";

const { villa: placeId } = placeIds;
const { villa } = routeDestination;

const googleMapsInit: IgoogleMapsInit = {
	apiKey: "",
	targetRef: "map",
	libraries: ["places"],
	version: "weekly",
	mapOptions: mapOptions,
	placeId: placeId,
	markerOptions: markerOptions,
	routeDestination: villa,
};

const maps = googleInit.extend({
	name: "Maps",
	data(): {
		googleMapsInit: IgoogleMapsInit;
	} {
		return {
			googleMapsInit,
		};
	},
	mounted(): void {
		if (process.env.VUE_APP_GOOGLE_API_KEY) {
			this.googleMapsInit.apiKey = process.env.VUE_APP_GOOGLE_API_KEY;
		} else throw "❌ VUE_APP_GOOGLE_API_KEY not set in .env!";
		this.$nextTick(() => {
			try {
				this.googleMaps(googleMapsInit);
			} catch (err) {
				console.log(err);
			}
		});
		console.log("🗺 Maps mounted.");
	},
});
export default maps;
</script>
<style lang="scss" scoped>
.map-responsive {
	overflow: hidden;
	padding-bottom: 100vh;
	position: relative;
	height: 0;
}
.google-map {
	left: 0;
	top: 0;
	height: 100vh;
	width: 100%;
	position: absolute;
}
</style>
