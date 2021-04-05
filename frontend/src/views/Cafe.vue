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
			<v-row class="pl-0 pr-0 ma-0 light-on-green full-height pt-16 pb-16">
				<v-col cols="12">
					<h3 class="museo museo-heading pt-16 pb-16">Tarjoi&shy;lem&shy;me teille</h3>
				</v-col>
				<v-col v-for="(menuItem, i) in menu" :key="menuItem.type + i" cols="12" md="6" lg="4">
					<div class="d-flex justify-center align-center mb-4">
						<v-icon v-if="menuItem.icon" x-large class="color-light">{{
							iconify(menuItem.icon)
						}}</v-icon>
						<h4 class="pl-4 display-1 museo">{{ menuItem.type }}</h4>
					</div>
					<hr class="mb-4" data-content="♡" />
					<div v-for="(item, i) in menuItem.json" :key="item.title + i" class="pl-10 pr-10 pb-5">
						<v-container fluid class="pa-0 ma-0">
							<v-row class="text-left" no-gutters>
								<v-col cols="8"
									><b>{{ i + 1 }}. {{ item.title }}</b></v-col
								>
								<v-col cols="4" class="text-right"
									><b>{{ item.price }} EUR</b></v-col
								>
								<v-col cols="12" class="pt-2 pl-5">{{ item.body }}</v-col>
								<v-col cols="12" class="pt-2 pl-5">{{ item.ingredients }}</v-col>
								<v-col cols="12" class="pt-2 pl-5"
									><i>{{ item.allergenic }}</i></v-col
								>
							</v-row>
						</v-container>
					</div>
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

import { axiosApi as axios } from "@in/axios";

import Carousel from "@c/Carousel.vue";
import { images, carouselImages, createURL } from "@d/cafe/cafe.data";
import { ICafeData, isICafeData, ICafeMenu, isICafeMenu } from "@d/interfaces/cafe.interface";

import { IImage } from "@d/interfaces/images.interface";
import lofbergsLogo from "@i/originals/cafe/lofbergs-logo.svg";
import { socialUrls } from "@d/company/company.data";

import {
	mdiHamburger,
	mdiFoodCroissant,
	mdiFoodForkDrink,
	mdiIceCream,
	mdiCoffeeOutline,
	mdiCandycane,
	mdiGlassFlute,
	mdiSilverwareForkKnife,
	mdiGlassMugVariant,
	mdiCupcake,
	mdiBeerOutline,
} from "@mdi/js";

const cafe = Vue.extend({
	name: "Cafe",
	metaInfo: { ...metaData },
	components: { Carousel, VueFB, CafeMaps },
	data(): {
		fbUrl: string;
		one: IImage;
		lofbergsLogo: { image: string; imageMaxWidth: string; alt: string };
		carouselImages: Record<string, IImage[]>;
		icons: Record<string, string>;
		data: boolean | ICafeData;
		menu: boolean | ICafeMenu;
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
			icons: {
				mdiHamburger,
				mdiFoodCroissant,
				mdiFoodForkDrink,
				mdiIceCream,
				mdiCoffeeOutline,
				mdiCandycane,
				mdiGlassFlute,
				mdiGlassMugVariant,
				mdiSilverwareForkKnife,
				mdiCupcake,
				mdiBeerOutline,
			},
			data: false,
			menu: false,
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
		fetchData(target: string): boolean | ICafeData {
			const url = createURL(target);
			const response = axios({ url });
			if (response && isICafeData(response)) {
				return response;
			} else return false;
		},
		fetchMenu(target: string): boolean | ICafeMenu {
			const url = createURL(target);
			const response = axios({ url });
			if (response && isICafeMenu(response)) {
				return response;
			} else return false;
		},
		iconify(icon: string): string | undefined {
			return this.icons[icon];
		},
	},
	async mounted(): Promise<void> {
		console.log("☕ Cafe mounted!");
		this.data = await this.fetchData("data");
		this.menu = await this.fetchMenu("menu");
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

hr {
	line-height: 1em;
	position: relative;
	outline: 0;
	border: 0;
	color: $color5;
	text-align: center;
	height: 1.5em;
	&:before {
		content: "";
		background: linear-gradient(to right, transparent, $color5, transparent);
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
	}
	&:after {
		content: attr(data-content);
		position: relative;
		display: inline-block;
		color: $color5;

		padding: 0 0.5em;
		line-height: 1.5em;
		color: $color5;
		background-color: $color3;
	}
}
</style>
