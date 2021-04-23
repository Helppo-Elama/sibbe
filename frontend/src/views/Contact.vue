<template>
	<div class="text-center">
		<v-container fluid class="pa-0 ma-0">
			<v-row class="ma-0 green-on-light half-height" align="center" justify="center">
				<v-col cols="12">
					<h3
						class="font-italic text-center"
						:class="{
							'display-1': $vuetify.breakpoint.xs,
							'display-2': $vuetify.breakpoint.sm,
							'display-3': $vuetify.breakpoint.mdAndUp,
						}"
					>
						Yhteystiedot ja reittiohjeet
					</h3>
				</v-col>
			</v-row>
			<v-row class="ma-0 light-on-green full-height pt-16 pb-16 pl-5 pr-5">
				<v-col cols="12" align="center" justify="center"
					><h3 class="museo museo-heading text-center">
						{{ companyData.title }}
					</h3>
				</v-col>
				<v-col cols="12" sm="6">
					<h4 class="museo museo-subheading">Osoite</h4>
					<p>
						{{ companyData.address }}
						<br />
						{{ companyData.postalCode }}, {{ companyData.postalArea }}
					</p>
				</v-col>
				<v-col cols="12" sm="6">
					<h4 class="museo museo-subheading">Puhelin</h4>
					<p>
						<a :href="'tel:' + companyData.phone" class="animate color-light">{{
							companyData.phone
						}}</a>
					</p>
				</v-col>
				<v-col cols="12" sm="6">
					<h4 class="museo museo-subheading">Sähköpostit</h4>
					<p>
						<router-link to="/mail" class="animate color-light">{{ companyEmail }}</router-link>
						<br />
						<router-link to="/salesmail" class="animate color-light">{{ salesEmail }}</router-link>
					</p>
				</v-col>
				<v-col cols="12" sm="6">
					<h4 class="museo museo-subheading">YTJ</h4>
					<p>
						<a :href="companyData.ytj" class="animate color-light"> Suomi Sisters Oy </a>
					</p>
				</v-col>
			</v-row>
			<v-row class="pl-0 pr-0 ma-0 yellow-on-dark full-height pt-16 pb-16">
				<v-col data-aos="fade-up" cols="12">
					<GoogleMaps :googleMapsInit="googleMapsInit" />
				</v-col>
			</v-row>
			<v-row class="ma-0 full-height dark-on-yellow full-height pt-16 pb-16">
				<v-col cols="12">
					<v-lazy>
						<ContactForm :sender="'contact'" />
					</v-lazy>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script lang="ts">
import Vue from "vue";
import { contact as metaData } from "@h/metaData";

import GoogleMaps from "@c/GoogleMaps.vue";
import ContactForm from "@c/ContactForm.vue";

import { companyData, images } from "@d/company/company.data";
import { ICompanyData } from "../data/interfaces/company.interface";
import { IImage } from "../data/interfaces/images.interface";

import { mapOptions, placeIds, markerOptions, routeDestination } from "@d/maps";
import { IGoogleMapsInit } from "@d/interfaces/maps.interface";

const { villa: placeId } = placeIds;
const { villa } = routeDestination;

const googleMapsInit: IGoogleMapsInit = {
	apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
	targetRef: "map",
	language: "fi",
	region: "FI",
	libraries: ["places"],
	version: "weekly",
	mapOptions: mapOptions,
	placeId: placeId,
	markerOptions: markerOptions,
	routeDestination: villa,
	id: "map",
};

export default Vue.extend({
	name: "Contact",
	metaInfo: { ...metaData },
	components: {
		GoogleMaps,
		ContactForm,
	},
	data(): {
		images: Array<IImage>;
		companyData: ICompanyData;
		googleMapsInit: IGoogleMapsInit;
	} {
		return {
			images,
			companyData,
			googleMapsInit,
		};
	},
	computed: {
		companyEmail(): string {
			return companyData.getEmail("company");
		},
		salesEmail(): string {
			return companyData.getEmail("sales");
		},
	},
	mounted(): void {
		if (process.env.VUE_APP_GOOGLE_API_KEY) {
			this.googleMapsInit.apiKey = process.env.VUE_APP_GOOGLE_API_KEY;
		} else console.error("❌ VUE_APP_GOOGLE_API_KEY not set in .env!");
		console.log("📡 Contact mounted.");
	},
});
</script>
<style lang="scss" scoped>
.empty {
	display: none;
}
</style>
