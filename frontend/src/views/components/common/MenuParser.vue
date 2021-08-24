<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0">
			<v-col cols="12">
				<h3 class="museo museo-heading pt-16 pb-16"><slot></slot></h3>
			</v-col>
			<template v-for="(menuItem, i) in items">
				<v-col v-if="menuItem.json" :key="menuItem.type + i" cols="12" md="6" lg="4">
					<div class="d-flex justify-center align-center mb-4">
						<v-icon v-if="menuItem.icon" x-large :style="'color: ' + color">{{
							iconify(menuItem.icon)
						}}</v-icon>
						<h4 class="pl-4 display-1 museo">{{ menuItem.type }}</h4>
					</div>
					<HorizontalLine :class-list="classList" />
					<div v-for="(it, x) in menuItem.json" :key="it.title + x" class="pl-10 pr-10 pb-5">
						<v-container fluid class="pa-0 ma-0">
							<v-row class="text-left pb-5" no-gutters>
								<v-col cols="8"
									><b>{{ x + 1 }}. {{ it.title }}</b></v-col
								>
								<v-col cols="4" class="text-right"
									><b>{{ it.price }} EUR</b></v-col
								>
								<v-col v-if="it.body" cols="12" class="pt-2 pl-5">{{ it.body }}</v-col>
								<v-col v-if="it.ingredients" cols="12" class="pt-2 pl-5">{{
									it.ingredients
								}}</v-col>
								<v-col v-if="it.allergenic" cols="12" class="pt-2 pl-5"
									><i>{{ it.allergenic }}</i></v-col
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
import Vue, { PropType } from "vue"

import { IMenu } from "@d/interfaces/menu.interface"
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
	mdiBeerOutline
} from "@mdi/js"
import HorizontalLine from "./HorizontalLine.vue"

export default Vue.extend({
	props: {
		items: { type: Array as () => PropType<IMenu>, required: true },
		color: {
			type: String,
			default() {
				return undefined
			}
		},
		classList: {
			type: String,
			default() {
				return undefined
			}
		}
	},
	components: { HorizontalLine },
	data(): {
		icons: Record<string, string>
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
				mdiBeerOutline
			}
		}
	},
	methods: {
		iconify(icon: string): string | undefined {
			return this.icons[icon]
		}
	},
	mounted(): void {
		console.log("😀 Menu parser mounted!")
	}
})
</script>

<style lang="scss" scoped>
.empty {
	font-size: 400;
}
</style>
