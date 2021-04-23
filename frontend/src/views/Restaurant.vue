<template>
	<div class="text-center">
		<Carousel :images="carouselImages" :textOverlay="['VILLA', 'Sibbe']" />
		<v-container fluid>
			<v-row
				class="half-quart-height"
				:class="{
					'mb-16': $vuetify.breakpoint.xsOnly,
				}"
				align="center"
				justify="center"
			>
				<v-col cols="12" class="green-on-light pb-16 pt-16">
					<h3
						class="font-italic"
						:class="{
							'display-1': $vuetify.breakpoint.xs,
							'display-2': $vuetify.breakpoint.sm,
							'display-3': $vuetify.breakpoint.mdAndUp,
						}"
					>
						Villa Sibbe -menestyksekkäitä kohtaamisia
					</h3>
				</v-col>
				<OpenClosed :openClosed="openClosed" />
			</v-row>
			<!--
			<v-row>
				<v-col cols="12" class="yellow-on-dark full-height pt-16 pb-16 pl-5 pr-5">
					<v-lazy>
						<VueFB :fbUrl="fbUrl" />
					</v-lazy>
				</v-col>
			</v-row>
			-->
			<v-row v-if="menu" class="pl-0 pr-0 ma-0 light-on-green full-height pt-16 pb-16">
				<v-col cols="12" class="pa-0 ma-0">
					<MenuParser :items="menu" />
				</v-col>
			</v-row>
			<v-row v-if="menu" class="pl-0 pr-0 ma-0 light-on-green full-height pt-16 pb-16">
				<v-col cols="12" class="pa-0 ma-0">
					<LunchParser :items="lunches" />
				</v-col>
			</v-row>
			<v-row class="pl-0 pr-0 ma-0 green-on-light full-height pt-16 pb-16">
				<v-col cols="12"> <GoogleMaps :googleMapsInit="googleMapsInit" /> </v-col>
			</v-row>
			<v-row class="pl-0 pr-0 ma-0 green-on-light full-height pt-16 pb-16">
				<v-col cols="12" md="6" class="pl-0 pr-0 ma-0 yellow-on-dark full-height pt-16 pb-16">
					<v-lazy>
						<VueFB :fbUrl="fbUrl" />
					</v-lazy>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" class="dark-on-yellow full-height pt-16 pb-16">
					<v-lazy>
						<ContactForm :sender="'restaurant'" />
					</v-lazy>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

import { restaurant as metaData } from "@h/metaData";

import Carousel from "@c/Carousel.vue";
import { images, carouselImages, createURL } from "@d/restaurant/restaurant.data";
import { IImage } from "@d/interfaces/images.interface";

const { one, two } = images;

import { axiosApi as axios } from "@in/axios";

import OpenClosed from "@c/common/OpenClosed.vue";

import VueFB from "@c/VueFB.vue";
import { socialUrls } from "@d/company/company.data";

import ContactForm from "@c/ContactForm.vue";

import MenuParser from "@c/common/MenuParser.vue";
import LunchParser from "@c/restaurant/LunchParser.vue";
import { IMenu, isIMenu } from "@d/interfaces/menu.interface";
import { IRestaurantData, isIRestaurantData } from "@d/interfaces/restaurant.interface";
import { mapOptions, placeIds, markerOptions, routeDestination } from "@d/maps";
import {
	IGoogleMapsInit,
	IOpeningPeriods,
	IOpeningHoursEvent,
	isIOpeningHoursEvent,
} from "@d/interfaces/maps.interface";
import GoogleMaps from "@c/GoogleMaps.vue";
import "@h/dateExtensions";

const { restaurant: placeId } = placeIds;

const googleMapsInit: IGoogleMapsInit = {
	apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
	language: "fi",
	region: "FI",
	targetRef: "map",
	libraries: ["places"],
	version: "weekly",
	mapOptions: mapOptions,
	placeId: placeId,
	markerOptions: markerOptions,
	routeDestination: routeDestination.villa,
	id: "map",
};

export default Vue.extend({
	name: "Restaurant",
	metaInfo: { ...metaData },
	components: {
		Carousel,
		OpenClosed,
		VueFB,
		ContactForm,
		MenuParser,
		LunchParser,
		GoogleMaps,
	},
	data(): {
		fbUrl: string;
		one: IImage;
		two: IImage;
		carouselImages: Record<string, IImage[]>;
		data: undefined | IRestaurantData;
		menu: undefined | IMenu;
		lunches: undefined | IMenu;
		googleMapsInit: IGoogleMapsInit;
		openClosed: { isOpen: boolean; periods: IOpeningPeriods; weekday_text?: string };
	} {
		return {
			fbUrl: socialUrls.fbUrl,
			one,
			two,
			carouselImages: carouselImages,
			data: undefined,
			menu: undefined,
			lunches: undefined,
			googleMapsInit,
			openClosed: { isOpen: false, periods: [] },
		};
	},
	methods: {
		setOpeningHours(event: IOpeningHoursEvent): void {
			if (isIOpeningHoursEvent(event)) {
				this.openClosed = {
					isOpen: event.detail.isOpen(),
					periods: event.detail.periods,
				};
			}
		},
		fetchData(target: string): undefined | IRestaurantData {
			const url = createURL(target);
			if (url) {
				const response = axios({ url });
				if (response && isIRestaurantData(response)) {
					return response;
				}
			} else {
				throw "❌ No URL for axios with target: " + target;
			}
			return;
		},
		fetchMenu(target: string): undefined | IMenu {
			const url = createURL(target);
			if (url) {
				const response = axios({ url });
				if (response && isIMenu(response)) {
					return response;
				}
			} else {
				throw "❌ No URL for axios with target: " + target;
			}
			return;
		},
	},
	async mounted(): Promise<void> {
		try {
			//this.data = await this.fetchData("data");
			this.menu = await this.fetchMenu("menu");
			this.lunches = await this.fetchMenu("lunch");
		} catch (error) {
			console.error(error);
		}

		if (process.env.VUE_APP_GOOGLE_API_KEY) {
			this.googleMapsInit.apiKey = process.env.VUE_APP_GOOGLE_API_KEY;
		} else console.error("❌ VUE_APP_GOOGLE_API_KEY not set in .env!");
		console.log("🍕 Restaurant mounted!");
	},
	created(): void {
		document.addEventListener(
			"openinghours",
			(event) => {
				this.setOpeningHours(event as IOpeningHoursEvent);
			},
			{ once: true }
		);
	},
});
</script>
<style lang="scss" scoped>
.empty {
	font-weight: 400;
}
</style>
