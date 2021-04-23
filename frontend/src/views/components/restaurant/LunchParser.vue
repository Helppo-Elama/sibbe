<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0">
			<v-col cols="12">
				<h3 class="museo museo-heading pt-16 pb-16"><slot></slot></h3>
			</v-col>
			<v-col v-for="(lunchItem, i) in items" :key="lunchItem.type + i" cols="12" md="6" lg="4">
				<div class="d-flex justify-center align-center mb-4">
					<v-icon v-if="lunchItem.icon" x-large class="color-light">{{
						iconify(lunchItem.icon)
					}}</v-icon>
					<h4 class="pl-4 display-1 museo">{{ lunchItem.type }}</h4>
				</div>
				<hr class="mb-4" data-content="♡" />
				<div v-for="(item, i) in lunchItem.json" :key="item.title + i" class="pl-10 pr-10 pb-5">
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

export default Vue.extend({
	props: {
		items: { type: Array as () => PropType<IMenu> },
	},
});
</script>

<style lang="scss" scoped>
.empty {
	font-weight: 400;
}
</style>
