<template>
	<div>
		<div class="map-responsive" ref="map" data-aos="fade-up" id="map"></div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"

import { IGoogleMapsInit } from "@d/interfaces/maps.interface"
import googleMapsInitFunction from "@in/googleMaps"

export default Vue.extend({
	name: "GoogleMaps",
	props: {
		googleMapsInit: { type: Object as () => PropType<IGoogleMapsInit>, required: true }
	},
	mounted() {
		try {
			const loaded = Vue.$googleMapsLoaded
			Vue.$googleMapsLoaded = googleMapsInitFunction(this.$props.googleMapsInit, loaded)
		} catch (error) {
			console.error(error)
		}
		console.log("🗺 Maps mounted.")
	}
})
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
