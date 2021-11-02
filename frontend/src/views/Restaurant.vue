<template>
	<div class="text-center">
		<Carousel :images="carouselImages" :text-overlay="['VILLA', 'Sibbe']" />
		<v-container fluid>
			<!--
			<v-row
				class="half-quart-height"
				:class="{
					'mb-16': $vuetify.breakpoint.xsOnly
				}"
				 -->
			<v-row align="center" justify="center">
				<v-col cols="12" class="green-on-light pb-16 pt-16">
					<h3
						class="font-italic"
						:class="{
							'display-1': $vuetify.breakpoint.xs,
							'display-2': $vuetify.breakpoint.sm,
							'display-3': $vuetify.breakpoint.mdAndUp
						}"
					>
						Villa Sibbe -menestyksekkäitä kohtaamisia
					</h3>
				</v-col>
				<v-col cols="12" md="6" lg="4" class="d-flex align-center justify-center pb-16">
					<OpenClosed
						v-if="serviceHours"
						:service-hours="serviceHours"
						:class-list="'color-dark'"
					/>
				</v-col>
				<v-col cols="12" md="6" lg="4" class="d-flex align-center justify-center pb-16">
					<ServiceHours
						v-if="serviceHours"
						:service-hours="serviceHours"
						:class-list="'color-dark'"
					/>
				</v-col>
			</v-row>
			<v-row class="dark-on-light">
				<v-col cols="12" class="d-flex align-center justify-center pb-16"
					><h1 class="bello text-center">Tulevia tapahtumia</h1></v-col
				>
				<v-col cols="12" class="d-flex pb-16"><Isanpaiva /></v-col>
				<v-col cols="12" class="d-flex pb-16"><Joulu /></v-col>
			</v-row>
			<v-row class="light-on-green full-height pt-16 pb-16">
				<v-col cols="12 px-1">
					<h3 class="museo museo-heading pb-16">Villa Sibben ravintola</h3>
				</v-col>
				<v-col cols="12" md="6" class="pa-0 ma-0">
					<SmallCarousel :images="images" class="px-1" />
				</v-col>
				<v-col cols="12" md="6" class="pa-0 px-5 ma-0 pb-2 vertical-middle">
					<p>
						<b>Villa Sibben Ravintola nobelisti A.I. Virtasen kotikartanossa</b> tarjoilee
						syyskaudella tuttuja, perinteisiä ruoka-annoksia sekä lounaita.
						<br />
						<br />
						Lounaalla katamme lämmittäviä keittoja, Sibben leipää ja päivän annoksen. Ála carte
						listaltamme löytyvät tutut klassikot: Samettista metsäsienikeittoa, Pippuripihvi,
						Lihapullat… Ja tietenkin Kolatun Juustolan lautanen jaettavaksi kahdelle.
						<br />
						<br />
						<b
							>Tiloissamme voi järjestää myös yksityistilaisuuksia, merkkipäiviä, kokouksia ja
							juhlia.</b
						>
						Aukioloaikamme on hyvä varmistaa näiltä sivuilta yksityistilaisuuksien varalta.
					</p>
				</v-col>
			</v-row>
			<v-row v-if="haveLunches" class="dark-on-yellow full-height pt-16 pb-16">
				<v-col cols="12" class="pa-0 ma-0">
					<lunch-parser :items="lunches" :color="'#424242'" :class-list="'dark-on-yellow'"
						>Lounaat ja brunssit</lunch-parser
					>
				</v-col>
			</v-row>
			<v-row v-if="menu" class="light-on-red full-height pt-16 pb-16">
				<v-col cols="12" class="pa-0 ma-0">
					<menu-parser :items="menu" :color="'#eaeaea'" :class-list="'light-on-red'"
						>A'la Carte lista</menu-parser
					>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" class="pa-0 ma-0">
					<SmallCarousel :images="menuImages" />
				</v-col>
			</v-row>
			<v-row class="mt-0">
				<v-col cols="12" md="6" class="pl-0 pr-0 ma-0 yellow-on-dark full-height pt-16 pb-16">
					<v-lazy>
						<VueFB :fb-url="fbUrl" />
					</v-lazy>
				</v-col>
				<v-col cols="12" md="6" class="pl-0 pr-0 ma-0 dark-on-yellow full-height pt-16 pb-16">
					<ContactForm :sender="'restaurant'" />
				</v-col>
			</v-row>
			<v-row class="green-on-light full-height pt-16 pb-16">
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
import SmallCarousel from "@c/common/SmallCarousel.vue"
import ContactForm from "@c/ContactForm.vue"
import GoogleMaps from "@c/GoogleMaps.vue"
import Isanpaiva from "@c/restaurant/Isanpaiva.vue"
import Joulu from "@c/restaurant/Joulu.vue"
import LunchParser from "@c/restaurant/LunchParser.vue"
import VueFB from "@c/VueFB.vue"
import { socialUrls } from "@d/company/company.data"
import { IImage } from "@d/interfaces/images.interface"
import { IGoogleMapsInit } from "@d/interfaces/maps.interface"
import { IMenu } from "@d/interfaces/menu.interface"
import { IRestaurantData } from "@d/interfaces/restaurant.interface"
import { IServiceHoursData } from "@d/interfaces/servicehours.interface"
import { mapOptions, markerOptions, placeIds, routeDestination } from "@d/maps"
import { carouselImages, createURL, images, menuImages } from "@d/restaurant/restaurant.data"
import { restaurant as metaData } from "@h/metaData"
import { axiosApi as axios } from "@in/axios"
import Vue from "vue"

const { restaurant: placeId } = placeIds

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
	routeDestination: routeDestination.villa,
	id: "map"
}

export default Vue.extend({
	name: "Restaurant",
	metaInfo: { ...metaData },
	components: {
		Carousel,
		SmallCarousel,
		ServiceHours,
		OpenClosed,
		Isanpaiva,
		Joulu,
		VueFB,
		ContactForm,
		MenuParser,
		LunchParser,
		GoogleMaps
	},
	data(): {
		fbUrl: string
		images: Array<IImage>
		carouselImages: Record<string, IImage[]>
		menuImages: Array<IImage>
		data: undefined | IRestaurantData
		menu: undefined | IMenu
		lunches: undefined | IMenu
		googleMapsInit: IGoogleMapsInit
		haveLunches: boolean
		serviceHours: undefined | IServiceHoursData
	} {
		return {
			fbUrl: socialUrls.fbUrl,
			carouselImages,
			menuImages,
			images,
			data: undefined,
			menu: undefined,
			lunches: undefined,
			googleMapsInit,
			haveLunches: false,
			serviceHours: undefined
		}
	},
	methods: {
		async fetchAll(): Promise<void> {
			const url = createURL()
			try {
				const response = await axios<{
					lunches: IMenu
					menu: IMenu
					serviceHours: IServiceHoursData
				}>({ url })
				if (response) {
					if (Array.isArray(response.lunches) && response.lunches.length)
						this.lunches = response.lunches
					if (Array.isArray(response.menu) && response.menu.length) this.menu = response.menu
					const { serviceHours } = response
					const l = serviceHours.json.length
					for (let j = 0; j < l; j += 1) {
						const day = serviceHours.json[j]
						if (day.open === null) serviceHours.json[j].open = ""
						if (day.close === null) serviceHours.json[j].close = ""
					}
					this.serviceHours = serviceHours
				}
			} catch (err) {
				console.log(err)
			}
		}
	},
	async mounted(): Promise<void> {
		await this.fetchAll()
		if (this.lunches) {
			this.lunches.forEach((lunch) => {
				if (Array.isArray(lunch.json)) {
					if (lunch.json.length > 0) this.haveLunches = true
				}
			})
		}
		if (process.env.VUE_APP_GOOGLE_API_KEY) {
			this.googleMapsInit.apiKey = process.env.VUE_APP_GOOGLE_API_KEY
		} else console.error("❌ VUE_APP_GOOGLE_API_KEY not set in .env!")
	}
})
</script>
<style lang="scss" scoped>
.closed {
	color: $color2;
}
.open {
	color: $color3;
}
</style>
