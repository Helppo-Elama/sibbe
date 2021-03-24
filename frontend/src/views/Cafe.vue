<template>
	<div class="text-center">
		<Carousel :images="carouselImages" :textOverlay="['CAFE', 'Sibbe']" />
		<v-container fluid class="pa-0 ma-0">
			<v-row class="ma-0 dark-on-yellow half-height pt-16" align="center" justify="center">
				<v-col cols="12" class="pb-16">
					<h3
						class="font-italic text-center"
						:class="{
							'pt-10': $vuetify.breakpoint.smAndDown,
							'display-1': $vuetify.breakpoint.xs,
							'display-2': $vuetify.breakpoint.sm,
							'display-3': $vuetify.breakpoint.mdAndUp,
						}"
					>
						Makuja Mukaan!
					</h3>
				</v-col>
				<v-col cols="12" md="6" lg="4" class="d-flex align-center justify-center pb-16">
					<div ref="open" class="d-none">
						<h2 class="museo">Kyllä, olemme</h2>
						<h1 class="museo open">avoinna!</h1>
						<h2 class="bello pt-2">Tulkaapa siis herkuttelemaan.</h2>
					</div>
					<div ref="closed" class="d-none">
						<h2 class="museo">Valitettavasti olemme</h2>
						<h1 class="museo closed">Suljettu juuri nyt.</h1>
						<h2 class="bello pt-2">Tulkaa siis myöhemmin uudestaan!</h2>
					</div>
				</v-col>
			</v-row>
			<v-row class="ma-0" justify="center" align="center">
				<v-col cols="12" md="6" class="full-height light-on-red pb-16" data-aos="fade-up">
					<h3 class="museo museo-heading pt-16 pb-16">Cafe Sibbe</h3>
					<p>
						...on Kotoisa rantakahvila Joensuun Tilan satamassa Sipoossa. Vieressä aktiviteetteja
						moneen makuun. Tule viihtymään kanssamme pidemmäksikin aikaa!
					</p>
					<p>
						<strong>
							Kahvilatuotteita<br />
							Voileipiä<br />
							Leivonnaisia<br />
							Kahvia<br />
							Virvokkeita
						</strong>
					</p>
					<img
						class="pt-16 pb-10"
						:src="lofbergsLogo.image"
						:alt="lofbergsLogo.alt"
						:style="lofbergsLogo.imageMaxWidth"
					/>
				</v-col>
				<v-col cols="12" md="6" class="yellow-on-dark full-height pt-16 pb-16" data-aos="fade-up">
					<v-lazy>
						<VueFB :fbUrl="fbUrl" />
					</v-lazy>
				</v-col>
			</v-row>
			<v-row class="pl-0 pr-0 ma-0 green-on-light full-height pt-16 pb-16">
				<v-col cols="12">
					<CafeMaps v-on:updateisopen="updateIsOpen" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import CafeMaps from "@c/CafeMaps.vue";
import VueFB from "@c/VueFB.vue";
import { cafe as metaData } from "@h/metaData";

import Carousel from "@c/Carousel.vue";
import { cafeImages as images, cafeCarouselImages as carouselImages } from "@d/cafe/cafe.images";

import { IImage } from "@d/interfaces/images.interface";
import lofbergsLogo from "@i/originals/cafe/lofbergs-logo.svg";
import { socialUrls } from "@d/company/company.data";

const cafe = Vue.extend({
	name: "Cafe",
	metaInfo: { ...metaData },
	components: { Carousel, VueFB, CafeMaps },
	data(): {
		fbUrl: string;
		one: IImage;
		lofbergsLogo: { image: string; imageMaxWidth: string; alt: string };
		carouselImages: Record<string, IImage[]>;
	} {
		return {
			fbUrl: socialUrls.fbUrlCafe,
			one: images.one,
			lofbergsLogo: {
				image: lofbergsLogo,
				imageMaxWidth: "width: 10em;",
				alt: "Löfbergs logo",
			},
			carouselImages: carouselImages,
		};
	},
	methods: {
		updateIsOpen(isOpen: string): void {
			this.$nextTick(() => {
				if (isOpen === "Avoinna") {
					(this.$refs["closed"] as HTMLElement).classList.add("d-none");
					(this.$refs["open"] as HTMLElement).classList.remove("d-none");
				} else {
					(this.$refs["open"] as HTMLElement).classList.add("d-none");
					(this.$refs["closed"] as HTMLElement).classList.remove("d-none");
				}
			});
		},
	},
	mounted(): void {
		console.log("☕ Cafe mounted!");
	},
});
export default cafe;
</script>

<style lang="scss" scoped>
.closed {
	color: $color2;
}
.open {
	color: $color3;
}
</style>
