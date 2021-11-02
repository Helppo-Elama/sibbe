<template>
	<div class="py-6 px-3 sm:px-5 md:px-20 bg-white border-b border-gray-200">
		<div class="mt-8 text-2xl text-center">Toistaiseksi voimassa oleva lounaslista</div>
		<div class="mt-6">
			<div class="flex justify-center">
				<table class="table-auto break-words">
					<thead class="text-center font-semibold">
						<th class="px-1"></th>
						<th class="px-1">Viikon&shy;päivä</th>
						<th class="px-1">Alku</th>
						<th class="px-1">&nbsp;</th>
						<th class="px-1">Loppu</th>
					</thead>
					<tr
						v-for="(day, j) in serviceHours.json"
						:key="j"
						:class="{ 'text-red-500': !day.openToday }"
					>
						<td>
							<input class="ml-3 mr-1 rounded-md" type="checkbox" v-model="day.openToday" />
						</td>
						<td>
							<span class="pr-1">
								{{ day.day }}
							</span>
						</td>
						<td>
							<input
								:disabled="!day.openToday"
								:class="('text-red-500', day.openToday)"
								type="time"
								class="
									my-2
									rounded-md
									border-gray-300
									shadow-sm
									focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
								"
								step="300"
								v-model="day.open"
							/>
							<div
								v-if="day.openToday && notValid(day.open)"
								class="text-center text-green-600 -mt-2"
							>
								Täytä
							</div>
							<div v-else-if="day.openToday" class="-mt-2">&nbsp;</div>
						</td>
						<td class="text-center">-</td>
						<td>
							<input
								type="time"
								:disabled="!day.openToday"
								class="
									mr-3
									my-2
									rounded-md
									border-gray-300
									shadow-sm
									focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
									inline-block
								"
								v-model="day.close"
							/>
							<div
								v-if="day.openToday && notValid(day.close)"
								class="text-center text-green-600 -mt-2"
							>
								Täytä
							</div>
							<div v-else-if="day.openToday" class="-mt-2">&nbsp;</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="mt-6">
			<v-date-picker
				locale="fi"
				v-model="serviceHours.selectedDateRange"
				is-range
				is-expanded
				:columns="$screens({ default: 1, lg: 2 })"
			/>
		</div>
		<div class="mt-6">
			<Portions
				:data="portions"
				:target="'portions'"
				class="pb-12"
				@delete="deletePortion"
				@change="updateAll"
			/>
		</div>
		<div class="flex justify-center w-100 py-6">
			<jet-button class="px-12" @click.native="addPortion()" action="add">
				Lisää uusi annos
			</jet-button>
		</div>
	</div>
</template>

<script>
import Portions from "./Components/PresistentLunchPortions"
import JetButton from "@/Jetstream/Button"

import { axios, axiosPost, axiosDelete } from "@/Helpers/js/axios"
import { buildUrl } from "@/Helpers/js/apiEndPoints"

export default {
	components: {
		JetButton,
		Portions
	},
	data() {
		return {
			serviceHours: {
				selectedDateRange: { start: null, end: null }
			},
			enabled: undefined,
			portions: undefined,
			weekDays: undefined,
			days: undefined
		}
	},
	watch: {
		selectedDateRange(newValue, oldValue) {
			console.log(newValue, oldValue)
		}
	},
	async mounted() {
		await this.init()
	},

	methods: {
		notValid(string) {
			if (!string || !string.match(/\d+:\d+/)) {
				return true
			}
			return false
		},
		async init() {
			const url = buildUrl("restaurant/lunch/presistent")
			const response = await axios(url)
			if (response) {
				this.portions = response.json.portions
				this.enabled = response.json.enabled
				this.serviceHours = response.service_hours
				console.log(this.serviceHours)
			}
		},
		async deletePortion(i) {
			/*
			this.portions.json.splice(i, 1)
			const { json } = this.portions
			const url = buildUrl("restaurant/lunch/presistent/delete")
			const response = await axiosDelete({ url, json })
			if (response) {
				this.$message.warn(response.message)
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe")
			*/
		},
		addPortion() {
			if (!this.portions) {
				this.portions = []
			}
			this.portions.push({
				title: "",
				body: "",
				ingredients: "",
				allergenic: "",
				price: "",
				price_additional: ""
			})
			this.updateAll()
		},
		async updateAll() {
			const json = window._.pick(this, ["start", "end", "enabled", "portions"])
			const url = buildUrl("restaurant/lunch/presistent/post")
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response.message)
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe")
		}
	}
}
</script>
