<template>
	<div>
		<number-input v-model="proxyDays">Näkyvien lounaspäivien lkm</number-input>
	</div>
</template>
<script>
import NumberInput from "@/Components/Common/InputNumber"

import { axiosPost } from "@/Helpers/js/axios"

import { postRestaurantLunchDefaultDaysUrl } from "@/Helpers/js/apiEndPoints"

export default {
	components: {
		NumberInput
	},
	props: {
		days: { type: String }
	},
	data() {
		return {
			proxyDays: undefined
		}
	},
	watch: {
		days: {
			deep: true,
			immediate: true,
			handler() {
				this.proxyDays = window._.cloneDeep(this.days)
			}
		},
		proxyDays() {
			this.updateDefaults()
		}
	},
	methods: {
		async updateDefaults() {
			const data = { title: "lunch", number: this.proxyDays }
			const url = postRestaurantLunchDefaultDaysUrl()
			const json = JSON.stringify(data)
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response.message)
			} else this.$message.error("Tietojen tallentamisessa tapahtui virhe")
		}
	},
	created() {
		this.updateDefaults = window._.debounce(this.updateDefaults, 2000)
	}
}
</script>
