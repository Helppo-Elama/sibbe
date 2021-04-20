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
				<v-col cols="12" md="6" lg="4" class="d-flex align-center justify-center pb-16">
					<div ref="open" class="d-none">
						<h2 class="museo">Kyllä, olemme</h2>
						<h1 class="museo open">avoinna!</h1>
						<h2 class="bello pt-2">Tulkaapa siis herkuttelemaan.</h2>
					</div>
					<div ref="closed" class="d-none">
						<h2 class="museo">Valitettavasti olemme</h2>
						<h1 class="museo closed">Suljettu juuri nyt.</h1>
						<h2 v-if="nextOpenTime" class="bello pt-2">
							Avaamme taas<br />
							<span class="museo open">{{ nextOpenTime.day }}, kello {{ nextOpenTime.time }}.</span
							><br />
							Tulkaa silloin uudestaan!
						</h2>
					</div>
				</v-col>
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
					<MenuParser :menu="menu" />
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

import MenuParser from "@m/MenuParser.vue";
import { mapOptions, placeIds, markerOptions, routeDestination } from "@d/maps";
import {
	IGoogleMapsInit,
	IOpeningHours,
	IOpeningHoursEvent,
	isIOpeningHoursEvent,
} from "@d/interfaces/maps.interface";
import GoogleMaps from "@m/GoogleMaps.vue";
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

const cafe = Vue.extend({
	name: "Cafe",
	metaInfo: { ...metaData },
	components: {
		Carousel,
		VueFB,
		MenuParser,
		GoogleMaps,
	},
	data(): {
		fbUrl: string;
		one: IImage;
		lofbergsLogo: { image: string; imageMaxWidth: string; alt: string };
		carouselImages: Record<string, IImage[]>;
		data: boolean | ICafeData;
		menu: boolean | IMenu;
		googleMapsInit: IGoogleMapsInit;
		openingHours: IOpeningHours | undefined;
		nextOpenTime: { day: string; time: string } | undefined;
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
			data: false,
			menu: false,
			googleMapsInit,
			openingHours: undefined,
			nextOpenTime: undefined,
		};
	},
	methods: {
		setOpeningHours(event: IOpeningHoursEvent): void {
			if (isIOpeningHoursEvent(event)) {
				const isOpen = event.detail.isOpen();
				const { periods, weekday_text } = event.detail;
				this.$nextTick(() => {
					if (isOpen) {
						(this.$refs["closed"] as HTMLElement).classList.add("d-none");
						(this.$refs["open"] as HTMLElement).classList.remove("d-none");
					} else {
						(this.$refs["open"] as HTMLElement).classList.add("d-none");
						(this.$refs["closed"] as HTMLElement).classList.remove("d-none");

						const open: Array<number> = [];
						for (let [day] of periods.entries()) {
							open.push(day);
						}
						const now = new Date().getDay();
						let start: Array<number> = [];
						let end: Array<number> = [];
						for (let i = 0; i <= 6; i += 1) {
							if (i >= now) {
								start.push(i);
							} else {
								end.push(i);
							}
						}
						const days = start.concat(end);

						const findIndex = (days: Array<number>, open: Array<number>): number | boolean => {
							for (let day of days) {
								const index = open.findIndex((x) => x === day);
								if (index >= 0) {
									return index as number;
								}
							}
							return false;
						};

						const getWeekDayAsText = (day: number): string | boolean => {
							if (day === 0) {
								return "Tänään";
							} else {
								const arrayOfWeekdays = [
									"Sunnuntaina",
									"Maanantaina",
									"Tiistaina",
									"Keskiviikkona",
									"Torstaina",
									"Perjantaina",
									"Lauantaina",
								];
								return arrayOfWeekdays[day];
							}
						};

						const index = findIndex(days, open);
						if (index !== false) {
							const openDay = periods[index as number].open;
							const day = getWeekDayAsText(openDay.day);
							if (day) {
								this.nextOpenTime = {
									day: day as string,
									time: openDay.time.slice(0, 2) + ":" + openDay.time.slice(2),
								};
							}
						}
					}
				});
			}
		},
		fetchData(target: string): boolean | ICafeData {
			const url = createURL(target);
			const response = axios({ url });
			if (response && isICafeData(response)) {
				return response;
			} else return false;
		},
		fetchMenu(target: string): boolean | IMenu {
			const url = createURL(target);
			const response = axios({ url });
			if (response && isIMenu(response)) {
				return response;
			} else return false;
		},
	},
	async mounted(): Promise<void> {
		this.data = await this.fetchData("data");
		this.menu = await this.fetchMenu("menu");

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
