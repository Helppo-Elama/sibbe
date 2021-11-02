<template>
	<app-layout>
		<template #header>
			<h2 class="font-semibold text-xl text-gray-800 text-2xl text-center">
				Ravintolan lounaslista
			</h2>
		</template>
		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="bg-white shadow-xl sm:rounded-lg">
					<PresistentLunch />
					<LunchDateSelector @change="fetchData" />
					<DateIterator :data="lunches" :defaults="defaults" :key="componentKey" />
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout"
import PresistentLunch from "./Lunch/PresistentLunch"
import LunchDateSelector from "./Lunch/LunchDateSelector"
import { axios } from "@/Helpers/js/axios"
import { getRestaurantLunchUrl, buildUrl } from "@/Helpers/js/apiEndPoints"
import DateIterator from "./Lunch/LunchDateIterator"

const now = new Date()
export default {
	components: {
		AppLayout,
		PresistentLunch,
		LunchDateSelector,
		DateIterator
	},
	props: {
		data: Array
	},
	data() {
		return {
			selectedDateRange: { start: now, end: now },
			lunches: undefined,
			componentKey: 0,
			defaults: {
				serving_time: { start: undefined, end: undefined },
				type: undefined,
				price: undefined,
				price_additional: undefined,
				days: undefined
			}
		}
	},
	mounted() {
		this.fetchDefaults()
	},
	methods: {
		async fetchData(selectedDateRange) {
			const { start, end } = selectedDateRange
			const url = getRestaurantLunchUrl(start, end)
			const response = await axios(url)
			if (response) {
				this.lunches = response
				const { length } = this.lunches
				for (let i = 0; i < length; i += 1) {
					if (this.lunches[i].serving_time === null || undefined) {
						this.$set(this.lunches[i], "serving_time", { start: undefined, end: undefined })
					}
				}
			}
			this.forceRerender()
		},
		async fetchDefaults() {
			const url = buildUrl("defaults/restaurant/lunch")
			const response = await axios(url)
			if (response) {
				const object = response[0]
				if (Object.prototype.hasOwnProperty.call(object, "json")) {
					this.defaults = object.json
				}
			}
		},
		forceRerender() {
			this.componentKey += 1
		}
	}
}
</script>
