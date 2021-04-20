<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0">
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
						<v-row class="text-left pb-5" no-gutters>
							<v-col cols="8"
								><b>{{ i + 1 }}. {{ item.title }}</b></v-col
							>
							<v-col cols="4" class="text-right"
								><b>{{ item.price }} EUR</b></v-col
							>
							<v-col v-if="item.body" cols="12" class="pt-2 pl-5">{{ item.body }}</v-col>
							<v-col v-if="item.ingredients" cols="12" class="pt-2 pl-5">{{
								item.ingredients
							}}</v-col>
							<v-col v-if="item.allergenic" cols="12" class="pt-2 pl-5"
								><i>{{ item.allergenic }}</i></v-col
							>
						</v-row>
					</v-container>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { IMenu } from "@d/interfaces/menu.interface";

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

const menuParser = Vue.extend({
	props: {
		menu: { type: Array as () => PropType<IMenu> },
	},
	data(): {
		icons: Record<string, string>;
	} {
		return {
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
		};
	},
	methods: {
		iconify(icon: string): string | undefined {
			return this.icons[icon];
		},
	},
});

export default menuParser;
</script>

<style lang="scss" scoped>
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
