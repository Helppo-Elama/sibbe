<template>
	<div>
		<div class="map-responsive" ref="map" data-aos="fade-up" id="map"></div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { IGoogleMapsInit } from "@d/interfaces/maps.interface";
import { googleMapsInit } from "@in/googleMaps";

const googleMaps = Vue.extend({
	name: "GoogleMaps",
	props: {
		googleMapsInit: { type: Object as () => PropType<IGoogleMapsInit> },
	},
	mounted() {
		try {
			const loaded = Vue.$googleMapsLoaded;
			Vue.$googleMapsLoaded = googleMapsInit(this.$props.googleMapsInit, loaded);
		} catch (err) {
			console.error(err);
		}
		console.log("🗺 Maps mounted.");
	},
});
export default googleMaps;
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
