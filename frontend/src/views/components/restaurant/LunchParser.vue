<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0">
			<v-col cols="12">
				<h3 class="museo museo-heading pt-16 pb-16"><slot></slot></h3>
			</v-col>
			<template v-for="(lunch, i) in items" cols="12" md="6" lg="4">
				<v-col v-if="lunch.json" :key="lunch.type + i" cols="12" md="6" lg="4">
					<div class="align-center mb-4">
						<h5 class="dislpay-1">{{ lunchDate(lunch.date) }}</h5>
						<h4 v-if="lunch.type" class="museo display-1">{{ lunchType(lunch.type) }}</h4>
						<h4 v-else class="museo"><br /></h4>
						<h5 v-if="lunch.hours">Tarjoiluaika: {{ lunch.hours }}</h5>
						<h5 v-else class="dislpay-1 museo"><br /></h5>
						<h5 v-if="lunch.price" class="pt-5">Lounaan hinta: {{ lunch.price }} EUR</h5>
						<h5 v-else class="dislpay-1 museo pt-5"><br /></h5>
					</div>
					<HorizontalLine :classList="classList" />
					<div v-for="(item, i) in lunch.json" :key="item.title + i" class="pl-10 pr-10 pb-5">
						<v-container fluid class="pa-0 ma-0">
							<v-row class="text-left pb-5" no-gutters>
								<v-col cols="8"
									><b>{{ i + 1 }}. {{ item.title }}</b></v-col
								>
								<v-col v-if="item.price" cols="4" class="text-right"
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
			</template>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { IMenu } from "@d/interfaces/menu.interface";
import HorizontalLine from "@c/common/HorizontalLine.vue";

import { dateToStringYYYYMMDD, capitalizeFormattedDate } from "@h/dateExtensions";

import { format } from "date-fns";
import fi from "date-fns/locale/fi";

export default Vue.extend({
	props: {
		items: { type: Array as () => PropType<IMenu> },
		color: { type: String },
		classList: { type: String },
	},
	components: { HorizontalLine },
	methods: {
		lunchType(type: string): string | undefined {
			if (type === "lunch") return "Lounas";
			if (type === "brunch") return "Brunssi";
			return;
		},
		lunchDate(date: string): string | undefined {
			const now = dateToStringYYYYMMDD(new Date());
			let result: string;
			if (date === now) result = "Tänään";
			else {
				result = capitalizeFormattedDate(
					format(Date.parse(date), "EEEE dd.MM.yyyy", {
						locale: fi,
					})
				);
			}
			return result;
		},
	},
	mounted(): void {
		console.log("😀 Lunch parser mounted!");
	},
});
</script>

<style lang="scss" scoped>
hr {
	line-height: 1em;
	position: relative;
	outline: 0;
	border: 0;
	color: $color1;
	text-align: center;
	height: 1.5em;
	&:before {
		content: "";
		background: linear-gradient(to right, transparent, $color1, transparent);
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
		color: $color1;

		padding: 0 0.5em;
		line-height: 1.5em;
		color: $color1;
		background-color: $color4;
	}
}
</style>
