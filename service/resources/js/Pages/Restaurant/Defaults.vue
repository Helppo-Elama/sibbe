<template>
	<app-layout>
		<template #header>
			<h2 class="font-semibold text-xl text-gray-800 text-2xl text-center">
				Ravintolan asetukset ja oletusarvot
			</h2>
		</template>
		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="bg-white shadow-xl sm:rounded-lg">
					<div class="py-6 px-3 sm:px-5 md:px-20 bg-white border-b border-gray-200">
						<div class="mt-8 text-2xl text-center">Lounas</div>
						<div class="mt-6"></div>
						<div class="flex">
							<LunchDays :days="lunch.number" />
						</div>
					</div>
					<Lunch :data="lunch" />
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout"
import Lunch from "./Defaults/LunchDefaults"
import LunchDays from "./Defaults/LunchDefaultsDays"

export default {
	components: {
		AppLayout,
		Lunch,
		LunchDays
	},
	props: {
		data: Array
	},
	computed: {
		lunch: {
			set(val) {
				return val
			},
			get() {
				const { data } = this
				let result
				if (Array.isArray(data)) {
					const l = data.length
					for (let i = 0; i < l; i += 1) {
						if (data[i].title && data[i].title === "lunch")
							result = window._.omit(data[i], ["created_at", "updated_at"])
					}
					if (!result.json) {
						result.json = {
							serving_time: { start: undefined, end: undefined },
							type: null,
							price: null,
							price_additional: null
						}
					}
					if (typeof result.number === "number") {
						result.number = result.number.toString()
					}
				}
				return result
			}
		}
	}
}
</script>
