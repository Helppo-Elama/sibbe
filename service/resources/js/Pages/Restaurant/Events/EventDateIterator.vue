<template>
	<div>
		<div v-for="(item, target) in items" :key="item + target" class="p-2">
			<div class="mt-3 py-6 text-grey-600 text-2xl text-center bg-gray-300">
				{{ parseDate(item.date) }}
			</div>
			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-evenly p-3 bg-gray-200"
				@change="updateDate(target)"
			>
				<div>
					<drop-down :target="target" :type="item.type" @change="updateType">
						{{ setDefaultType(target) }}
					</drop-down>
				</div>
				<div class="text-center">
					<time-between-input
						:start="getServingTime('start', target)"
						@start="item.serving_time.start = $event"
						:end="getServingTime('end', target)"
						@end="item.serving_time.end = $event"
						>Tarjoiluaika</time-between-input
					>
				</div>
				<div class="text-center">
					<number-between-input
						:price="item.price"
						@price="item.price = $event"
						:priceAdditional="item.price_additional"
						@priceAdditional="item.price_additional = $event"
						>Päivän hinta</number-between-input
					>
				</div>
			</div>
			<MenuItems
				:data="item.json"
				:date="item.date"
				:target="target"
				@delete="deleteItem"
				@change="updateItem"
				:key="componentKey"
			/>
			<div class="flex justify-center w-100 py-6">
				<jet-button class="px-12" @click.native="addItem(target)" action="add">
					Lisää uusi annos
				</jet-button>
			</div>
		</div>
	</div>
</template>
<script>
import { format } from "date-fns"
import fi from "date-fns/locale/fi"
import NumberBetweenInput from "@/Components/Common/InputNumberBetween"
import TimeBetweenInput from "@/Components/Common/InputTimeBetween"
import DropDown from "./Components/EventTypeDropDown"
import JetButton from "@/Jetstream/Button"

import { capitalize } from "@/Helpers/js/common"
import { ISOStringToDate } from "@/Helpers/js/dateFunctions"

import { axiosPost, axiosDelete } from "@/Helpers/js/axios"
import {
	postRestaurantLunchUrl,
	postRestaurantLunchDateUrl,
	deleteRestaurantLunchUrl
} from "@/Helpers/js/apiEndPoints"

import MenuItems from "@/Components/Common/Menu/MenuItems"

export default {
	components: {
		NumberBetweenInput,
		TimeBetweenInput,
		DropDown,
		JetButton,
		MenuItems
	},
	props: {
		data: { Type: Object },
		defaults: { Type: Object }
	},
	data() {
		return {
			items: undefined,
			componentKey: 0
		}
	},
	watch: {
		data: {
			deep: true,
			immediate: true,
			handler() {
				if (!this.portions) {
					// REMOVE WHEN ALL PORTIONS HAVE ADDITIONAL PRICE
					const data = window._.cloneDeep(this.data)
					if (Array.isArray(data)) {
						const l = data.length
						for (let i = 0; i < l; i += 1) {
							const d = data[i]
							if (!Object.prototype.hasOwnProperty.call(d, "price_additional")) {
								d.price_additional = null
							}
						}
						this.items = data
					}
				}
			}
		}
	},
	methods: {
		parseDate(date) {
			let result
			try {
				const isoString = `${date}T12:00:00.000Z`
				result = capitalize(
					format(Date.parse(ISOStringToDate(isoString)), "EEEEEE dd.MM.yyyy", {
						locale: fi
					})
				)
			} catch (error) {
				console.error(`parseDate(date) is not valid date: ${date}`)
			}
			return result
		},
		getServingTime(time, i) {
			const item = this.items[i]
			const { start, end } = item.serving_time
			const { start: defaultStart, end: defaultEnd } = this.$props.defaults.serving_time
			let result
			let key
			if (time === "start") {
				key = "start"
				if (start === undefined) {
					result = defaultStart
				} else result = start
			}
			if (time === "end") {
				key = "end"
				if (end === undefined) {
					result = defaultEnd
				} else result = end
			}
			if (key) {
				this.items[i].serving_time[key] = result
			}
			return result
		},

		async deleteItem({ target, i }) {
			this.items[target].json.splice(i, 1)
			const json = window._.pick(this.items[target], ["date", "json"])
			const url = deleteRestaurantLunchUrl()
			const response = await axiosDelete({ url, json })
			if (response) {
				this.$message.warn(response.message)
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe")
			this.forceRerender()
		},
		addItem(target) {
			const i = target
			if (!this.items[i].json) {
				this.items[i].json = []
			}
			this.items[i].json.push({
				title: "",
				body: "",
				ingredients: "",
				allergenic: "",
				price: "",
				price_additional: ""
			})
			this.updateItem({ target, undefined })
			this.forceRerender()
		},
		async updateItem({ target, portions }) {
			const i = target
			if (portions) this.items[i].json = portions
			const json = JSON.stringify(this.items[i])
			const url = postRestaurantLunchUrl()
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response.message)
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe")
		},

		setDefaultType(target) {
			const i = target
			if (this.items[i].type === undefined) this.items[i].type = this.defaults.type
		},
		updateType({ type, target }) {
			const i = target
			this.items[i].type = type
			this.updateDate(i)
		},
		async updateDate(target) {
			const i = target
			const data = window._.pick(this.items[i], [
				"date",
				"price",
				"price_additional",
				"serving_time",
				"type"
			])
			const url = postRestaurantLunchDateUrl()
			const json = JSON.stringify(data)
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response.message)
			} else this.$message.error("Päivän tallentamisessa tapahtui virhe")
		},
		forceRerender() {
			this.componentKey += 1
		}
	},
	mounted() {
		// Set default prices for DAYS if empty
		if (this.items) {
			Object.keys(this.items).forEach((i) => {
				if (!this.items[i].price) {
					this.items[i].price = this.defaults.price
				}
				if (!this.items[i].price_additional) {
					this.items[i].price_additional = this.defaults.price_additional
				}
			})
		}
	},
	created() {
		this.updateDate = window._.debounce(this.updateDate, 1000)
	}
}
</script>
