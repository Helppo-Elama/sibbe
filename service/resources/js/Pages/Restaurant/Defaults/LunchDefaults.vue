<template>
	<div>
		<div class="p-2 rounded-xl shadow-md">
			<div class="mt-3 py-6 text-grey-600 text-2xl text-center bg-gray-300">Oletusarvot</div>
			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-evenly p-3 bg-gray-200"
				@change="updateDefaults()"
			>
				<div>
					<drop-down :type="defaults.json.type" @change="updateDefaultType"> </drop-down>
				</div>
				<div class="text-center">
					<time-between-input
						:start="defaults.json.serving_time.start"
						@start="defaults.json.serving_time.start = $event"
						:end="defaults.json.serving_time.end"
						@end="defaults.json.serving_time.end = $event"
						>Tarjoiluaika</time-between-input
					>
				</div>
				<div class="text-center">
					<number-between-input
						:price="defaults.json.price"
						@price="defaults.json.price = $event"
						:priceAdditional="defaults.json.price_additional"
						@priceAdditional="defaults.json.price_additional = $event"
						>Päivän hinta</number-between-input
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import DropDown from "../Lunch/Components/LunchTypeDropDown"
import NumberBetweenInput from "@/Components/Common/InputNumberBetween"
import TimeBetweenInput from "@/Components/Common/InputTimeBetween"

import { axiosPost } from "@/Helpers/js/axios"

import { postRestaurantLunchInitialDataUrl } from "@/Helpers/js/apiEndPoints"

export default {
	components: {
		DropDown,
		NumberBetweenInput,
		TimeBetweenInput
	},
	props: {
		data: { Type: Object }
	},
	data() {
		return {
			defaults: undefined
		}
	},
	watch: {
		data: {
			deep: true,
			immediate: true,
			handler() {
				this.defaults = window._.cloneDeep(this.data)
			}
		}
	},
	methods: {
		async updateDefaults() {
			const data = window._.cloneDeep(this.defaults)
			data.title = "lunch"
			const url = postRestaurantLunchInitialDataUrl()
			const json = JSON.stringify(data)
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response.message)
			} else this.$message.error("Tietojen tallentamisessa tapahtui virhe")
		},
		updateDefaultType(type) {
			this.defaults.json.type = type
			this.updateDefaults()
		}
	},
	created() {
		this.updateDefaults = window._.debounce(this.updateDefaults, 2000)
	}
}
</script>
