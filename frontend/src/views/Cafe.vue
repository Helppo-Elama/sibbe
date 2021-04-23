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
						Kesän ystävän lempipaikka
					</h3>
				</v-col>
				<OpenClosed :openClosed="openClosed" />
			</v-row>
			<v-row>
				<v-col cols="12" md="6" class="light-on-red full-height pb-16" data-aos="fade-up">
					<h3 class="museo museo-heading pt-16 pb-16">Cafe Sibbe</h3>
					<p>
						Joensuun Tilan sataman sydämessä sykkii kesäisin rantakahvila Café Sibbe.
						<br /><br />
						Kahvilassa voit istahtaa aivan veden ääreen, lipaista jäätelötötterön, siemaista
						kupillisen kahvia tai lasillisen kuohuvaa.
						<br /><br />
						Pikkupurtavat, grillituotteet ja viileät juomat kruunaavat kesäisen retkipäivän. Café
						Sibben terassilla viihtyvät kaikki kesän ystävät; auringonpalvojat, fribaajat,
						motoristit, polkupyöräilijät, uimarit, veneilijät…
						<br /><br />
						<b>Café Sibbe – kesän ystävän lempipaikka</b>
					</p>
					<img
						class="pt-16 pb-10"
						:src="lofbergsLogo.image"
						:alt="lofbergsLogo.alt"
						:style="lofbergsLogo.imageMaxWidth"
					/>
				</v-col>
				<v-col cols="12" md="6" class="pl-0 pr-0 ma-0 yellow-on-dark full-height pt-16 pb-16">
					<v-lazy>
						<VueFB :fbUrl="fbUrl" />
					</v-lazy>
				</v-col>
			</v-row>
			<v-row v-if="menu" class="pl-0 pr-0 ma-0 light-on-green full-height pt-16 pb-16">
				<v-col cols="12" class="pa-0 ma-0">
					<menu-parser :items="menu" :color="'#eaeaea'" :classList="'light-on-green'"
						>Tarjoi&shy;lem&shy;me teille</menu-parser
					>
				</v-col>
			</v-row>
			<v-row class="pl-0 pr-0 ma-0 green-on-light full-height pt-16 pb-16">
				<v-col cols="12"> <GoogleMaps :googleMapsInit="googleMapsInit" /> </v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import VueFB from "@c/VueFB.vue";
import { cafe as metaData } from "@h/metaData";

import { axiosApi as axios } from "@in/axios";

import Carousel from "@c/Carousel.vue";
import { images, carouselImages, createURL } from "@d/cafe/cafe.data";
import { ICafeData, isICafeData } from "@d/interfaces/cafe.interface";
import { IMenu, isIMenu } from "@d/interfaces/menu.interface";

import { IImage } from "@d/interfaces/images.interface";
import lofbergsLogo from "@i/originals/cafe/lofbergs-logo.svg";
import { socialUrls } from "@d/company/company.data";

import MenuParser from "@c/common/MenuParser.vue";
import OpenClosed from "@c/common/OpenClosed.vue";
import { mapOptions, placeIds, markerOptions, routeDestination } from "@d/maps";
import {
	IGoogleMapsInit,
	IOpeningPeriods,
	IOpeningHoursEvent,
	isIOpeningHoursEvent,
} from "@d/interfaces/maps.interface";
import GoogleMaps from "@c/GoogleMaps.vue";
import "@h/dateExtensions";

const { cafe: placeId } = placeIds;

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
	routeDestination: routeDestination.cafe,
	id: "map",
};

export default Vue.extend({
	name: "Cafe",
	metaInfo: { ...metaData },
	components: {
		Carousel,
		OpenClosed,
		VueFB,
		MenuParser,
		GoogleMaps,
	},
	data(): {
		fbUrl: string;
		one: IImage;
		lofbergsLogo: { image: string; imageMaxWidth: string; alt: string };
		carouselImages: Record<string, IImage[]>;
		data: undefined | ICafeData;
		menu: undefined | IMenu;
		googleMapsInit: IGoogleMapsInit;
		openClosed: { isOpen: boolean; periods: IOpeningPeriods; weekday_text?: string };
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
			data: undefined,
			menu: undefined,
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
		fetchData(target: string): undefined | ICafeData {
			const url = createURL(target);
			if (url) {
				const response = axios({ url });
				if (response && isICafeData(response)) {
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
			this.data = await this.fetchData("data");
			this.menu = await this.fetchMenu("menu");
		} catch (error) {
			console.error(error);
		}

		if (process.env.VUE_APP_GOOGLE_API_KEY) {
			this.googleMapsInit.apiKey = process.env.VUE_APP_GOOGLE_API_KEY;
		} else console.error("❌ VUE_APP_GOOGLE_API_KEY not set in .env!");
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
