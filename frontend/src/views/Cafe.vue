<template>
	<div class="text-center dark-on-yellow">
		<Carousel :images="carouselImages" :text-overlay="['CAFE', 'Sibbe']" />
		<v-container fluid class="pa-0 ma-0">
			<v-row class="ma-0 dark-on-yellow half-height pt-16" align="center" justify="center">
				<v-col cols="12" class="pb-16">
					<h3
						class="font-italic text-center"
						:class="{
							'pt-10': $vuetify.breakpoint.smAndDown,
							'display-1': $vuetify.breakpoint.xs,
							'display-2': $vuetify.breakpoint.sm,
							'display-3': $vuetify.breakpoint.mdAndUp
						}"
					>
						Kesän ystävän lempipaikka
					</h3>
				</v-col>
				<v-col cols="12" md="6" lg="4" class="d-flex align-center justify-center pb-16">
					<OpenClosed v-if="serviceHours" :service-hours="serviceHours" />
				</v-col>
				<v-col cols="12" md="6" lg="4" class="d-flex align-center justify-center pb-16">
					<ServiceHours v-if="serviceHours" :service-hours="serviceHours" :target="'cafe'" />
				</v-col>
			</v-row>
			<v-row class="mt-0 mx-0">
				<v-col cols="12" md="6" class="light-on-red full-height pb-16 px-1">
					<div data-aos="fade-up">
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
					</div>
				</v-col>
				<v-col cols="12" md="6" class="pl-0 pr-0 ma-0 yellow-on-dark full-height pt-16 pb-16">
					<v-lazy>
						<VueFB :fb-url="fbUrl" />
					</v-lazy>
				</v-col>
			</v-row>
			<v-row v-if="menu" class="pl-0 pr-0 ma-0 light-on-green full-height pt-16 pb-16">
				<v-col cols="12" class="pa-0 ma-0">
					<menu-parser :items="menu" :color="'#eaeaea'" :class-list="'light-on-green'"
						>Tarjoi&shy;lem&shy;me teille</menu-parser
					>
				</v-col>
			</v-row>
			<v-row class="pl-0 pr-0 ma-0 green-on-light full-height pt-16 pb-16">
				<v-col cols="12"> <GoogleMaps :google-maps-init="googleMapsInit" /> </v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import "@h/dateExtensions"

import Carousel from "@c/Carousel.vue"
import MenuParser from "@c/common/MenuParser.vue"
import OpenClosed from "@c/common/OpenClosed.vue"
import ServiceHours from "@c/common/ServiceHours.vue"
import GoogleMaps from "@c/GoogleMaps.vue"
import VueFB from "@c/VueFB.vue"
import { carouselImages, createURL, images } from "@d/cafe/cafe.data"
import { socialUrls } from "@d/company/company.data"
import { ICafeData, isICafeData } from "@d/interfaces/cafe.interface"
import { IImage } from "@d/interfaces/images.interface"
import { IGoogleMapsInit } from "@d/interfaces/maps.interface"
import { IMenu, isIMenu } from "@d/interfaces/menu.interface"
import { IServiceHours, isIServiceHours } from "@d/interfaces/servicehours.interface"
import { mapOptions, markerOptions, placeIds, routeDestination } from "@d/maps"
import { createApiURL as serviceHoursApiUrl } from "@d/servicehours/servicehours.data"
import { cafe as metaData } from "@h/metaData"
import lofbergsLogo from "@i/originals/cafe/lofbergs-logo.svg"
import { axiosApi as axios } from "@in/axios"
import Vue from "vue"

const { cafe: placeId } = placeIds

const googleMapsInit: IGoogleMapsInit = {
	apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
	language: "fi",
	region: "FI",
	targetRef: "map",
	libraries: ["places"],
	version: "weekly",
	mapOptions,
	placeId,
	markerOptions,
	routeDestination: routeDestination.cafe,
	id: "map"
}

export default Vue.extend({
	name: "Cafe",
	metaInfo: { ...metaData },
	components: {
		Carousel,
		ServiceHours,
		OpenClosed,
		VueFB,
		MenuParser,
		GoogleMaps
	},
	data(): {
		fbUrl: string
		one: IImage
		lofbergsLogo: { image: string; imageMaxWidth: string; alt: string }
		carouselImages: Record<string, IImage[]>
		data: undefined | ICafeData
		menu: undefined | IMenu
		serviceHours: undefined | IServiceHours
		googleMapsInit: IGoogleMapsInit
	} {
		return {
			fbUrl: socialUrls.fbUrlCafe,
			one: images.one,
			lofbergsLogo: {
				image: lofbergsLogo,
				imageMaxWidth: "width: 10em;",
				alt: "Löfbergs logo"
			},
			carouselImages,
			data: undefined,
			menu: undefined,
			serviceHours: undefined,
			googleMapsInit
		}
	},
	methods: {
		async fetchData(target: string): Promise<undefined | ICafeData> {
			try {
				const url = createURL(target)
				const response = await axios({ url })
				if (response && isICafeData(response)) return response
			} catch (err) {
				console.log(err)
			}
			return undefined
		},
		async fetchServiceHours(target: string): Promise<undefined | IServiceHours> {
			try {
				const url = serviceHoursApiUrl(target)
				const response = await axios({ url })
				if (response) {
					if (isIServiceHours(response[0].json)) {
						const data = response[0].json
						const l = data.length
						for (let j = 0; j < l; j += 1) {
							const day = data[j]
							if (day.open === null) data[j].open = ""
							if (day.close === null) data[j].close = ""
						}
						return data
					}
				}
			} catch (err) {
				console.log(err)
			}
			return undefined
		},
		async fetchMenu(target: string): Promise<undefined | IMenu> {
			try {
				const url = createURL(target)
				const response = await axios({ url })
				if (response && isIMenu(response)) {
					return response
				}
			} catch (err) {
				console.log(err)
			}
			return undefined
		}
	},
	async mounted(): Promise<void> {
		// this.data = await this.fetchData("data")
		this.serviceHours = await this.fetchServiceHours("cafe")
		this.menu = await this.fetchMenu("menu")
		if (process.env.VUE_APP_GOOGLE_API_KEY) {
			this.googleMapsInit.apiKey = process.env.VUE_APP_GOOGLE_API_KEY
		} else console.error("❌ VUE_APP_GOOGLE_API_KEY not set in .env!")
	}
})
</script>

<style lang="scss" scoped>
.empty {
	font-weight: 400;
}
.closed {
	color: $color2;
}
.open {
	color: $color3;
}
</style>
