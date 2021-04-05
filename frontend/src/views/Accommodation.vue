<template>
	<div class="text-center">
		<Carousel :images="carouselImages" :textOverlay="['VILLA', 'Sibbe']" />
		<v-container fluid>
			<v-row class="green-on-light half-quart-height pt-16 pb-16" align="center" justify="center">
				<v-col cols="12">
					<h3
						class="font-italic"
						:class="{
							'display-1': $vuetify.breakpoint.xs,
							'display-2': $vuetify.breakpoint.sm,
							'display-3': $vuetify.breakpoint.mdAndUp,
						}"
					>
						Majoitu Nobelisti A.I Virtasen tilan pää&shy;rak&shy;en&shy;nuk&shy;ses&shy;sa.
					</h3>
				</v-col>
			</v-row>
			<v-row data-aos="fade-up" class="light-on-green pt-16" align="center" justify="center">
				<v-col cols="12">
					<h3 class="museo heading">Huoneet</h3>
				</v-col>
				<v-col cols="12" md="8" class="quart-height pt-16 pb-16">
					<picture>
						<source :srcSet="one.webp.srcSet" type="image/webp" />
						<img
							class="header"
							:src="one.img.src"
							:srcSet="one.img.srcSet"
							:width="one.img.width"
							:height="one.img.height"
							:alt="one.alt"
							loading="lazy"
						/>
					</picture>
				</v-col>
				<v-col cols="12" md="4" class="pb-16">
					<p>
						Täällä voit todella tuntea historian huminaa.
						<br /><br />
						Vastaremontoidut kauniit hotellitasoiset huoneemme, laadukkaat sängyt, rauhallinen
						ympäristö sekä vanhan kartanon henki takaavat mukavat ja pitkät yöunet.
						<br /><br />
						Lähellä oleva luonto tarjoaa mahtavat puitteet ulkoiluun ja virkistäytymiseen.
					</p>
					<p>
						Varaa oma majoituksesi vanhojen tammipuiden suojista.
						<br /><br />
						Tule nauti hiljaisuudesta sekä rauhasta!
					</p>
				</v-col>
			</v-row>
			<v-row class="text-center">
				<v-lazy>
					<v-col class="ma-0 pa-0">
						<AccommodationList />
					</v-col>
				</v-lazy>
			</v-row>
		</v-container>
	</div>
</template>
<script lang="ts">
import Vue from "vue";
import { accommodation as metaData } from "@h/metaData";

import Carousel from "@c/Carousel.vue";
import AccommodationList from "@c/AccommodationList.vue";
import {
	accommodationImages as images,
	accommodationCarouselImages as carouselImages,
} from "@d/accommodation/accommodation.images";

import { IImage } from "@d/interfaces/images.interface";

const accommodation = Vue.extend({
	name: "Accommodation",
	metaInfo: { ...metaData },
	components: { Carousel, AccommodationList },
	data(): { one: IImage; carouselImages: Record<string, IImage[]> } {
		return {
			one: images.one,
			carouselImages: carouselImages,
		};
	},
	mounted(): void {
		console.log("🎀 Accommodation mounted.");
	},
});
export default accommodation;
</script>
<style lang="scss" scoped>
.empty {
	display: none;
}
</style>
