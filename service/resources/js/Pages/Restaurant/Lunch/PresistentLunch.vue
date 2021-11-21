<template>
	<div class="pt-6 px-10">
		<div class="font-semibold text-xl pb-4 text-center">Jatkuvien lounaiden täyttöohje</div>
		<ul class="list-disc px-6 pb-3">
			<li>Jos jatkuvien loudaiden valitsin ja teksti on vihreällä <b>muita lounaita ei näy!</b></li>
			<li>
				<b>Valitkaa kalenterista päiväväli, jolla viikkokohtainen lounas on näkyvillä.</b> Ei niitä
				päiviä, jolloin itse lounasta tarjoillaan.
			</li>
			<li>
				Raksi ruudussa, jolloin viikonpäivä ei ole punaisella, merkitsee sitä lounasta tarjoillaan
				sinä viikonpäivänä.
			</li>
			<li>
				Täyttäkää huolellisesti pyydetyt ajat. Jos päivä ei ole punaisella eli lounasta tarjoillaan
				ja jokin aika puuttuu se tulee näkymään "undefined" -tekstinä asiakasnäkymässä.
			</li>
			<li>
				Jos lounasta ei tarjoilla, aikoja ei tarvitse poistaa, vaan ne voivat odottaa rauhassa
				käyttöönottoa.
			</li>
			<li>Odottakaa ennen täyttämistä ensin rauhassa että sivu latautuu kokonaan.</li>
		</ul>
		<div class="mt-3 py-6 text-grey-600 text-2xl text-center bg-gray-300 bg-gray-300">
			Toistaiseksi voimassa oleva lounaslista
		</div>

		<div class="mt-6">
			<jet-switch
				:checked="!enabled"
				center
				@change="
					enabled = !enabled
					updateData()
				"
				><b class="text-lg">Päällä: Muita lounaita ei näy!</b></jet-switch
			>
		</div>
		<div
			class="
				mt-6
				grid grid-cols-1
				md:grid-cols-2
				xl:grid-cols-3
				gap-1
				place-items-stretch
				items-center
			"
		>
			<div class="flex justify-center">
				<form @change="updateServiceHours">
					<table class="table-auto break-words">
						<thead class="text-center font-semibold">
							<th class="px-1"></th>
							<th class="px-1">Viikon&shy;päivä</th>
							<th class="px-1">Alku</th>
							<th class="px-1">&nbsp;</th>
							<th class="px-1">Loppu</th>
						</thead>
						<tr
							v-for="(day, j) in serviceHours"
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
				</form>
			</div>
			<div class="xl:col-span-2">
				<div class="flex justify-center sm:pt-6">
					<v-date-picker
						locale="fi"
						:value="selectedDateRange"
						:columns="$screens({ default: 1, xl: 2 })"
						:rows="$screens({ default: 1, lg: 2, xl: 1 })"
						:key="componentKey"
						@input="setSelectedDateRange"
						is-range
						:is-expanded="$screens({ default: false, xl: true })"
					/>
				</div>
				<div v-if="hasSelectedDateRange()" class="text-center pt-2">
					<div>Viikkokohtainen lounas on näkyvillä aikavälillä:</div>
					<div>
						<b>{{ parseSelectedDateRange() }}</b>
					</div>
					<div class="pt-2">
						<jet-button class="ml-3" action="delete" @click.native="selectedDateRangeClear()">
							Tyhjennä päivämäärä
						</jet-button>
					</div>
				</div>
				<div v-else class="text-green-600 text-center pt-2">Ei valittua päivämäärää</div>
			</div>
		</div>
		<div class="mt-6">
			<div class="bg-gray-200 bg-opacity-25">
				<div class="p-4">
					<MenuItems
						:data.sync="portions"
						:target="'portions'"
						@delete="deletePortion"
						@change="updateData"
						class="pb-12"
					/>
				</div>
				<div class="flex justify-center w-100 py-2">
					<jet-button class="px-12" @click.native="addPortion()" action="add">
						Lisää uusi annos
					</jet-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { format } from "date-fns"
import fi from "date-fns/locale/fi"
import { dateToStringYYYYMMDD } from "@/Helpers/js/dateFunctions"
import JetSwitch from "@/Jetstream/Switch.vue"
import MenuItems from "@/Components/Common/Menu/MenuItems"
import JetButton from "@/Jetstream/Button"

import { axios, axiosPost, axiosDelete } from "@/Helpers/js/axios"
import { capitalize } from "@/Helpers/js/common"
import { buildUrl } from "@/Helpers/js/apiEndPoints"

export default {
	components: {
		JetSwitch,
		JetButton,
		MenuItems
	},
	data() {
		return {
			serviceHours: {},
			selectedDateRange: { start: null, end: null },
			enabled: true,
			portions: [],
			componentKey: 0
		}
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
				if (
					response.json.portions === "null" ||
					response.json.portions === "" ||
					response.json.portions === "[]"
				)
					this.portions = []
				else this.portions = response.json.portions
				this.enabled = response.json.enabled
				this.serviceHours = response.service_hours.json
				this.selectedDateRange = {
					start: response.service_hours.start,
					end: response.service_hours.end
				}
			}
		},
		// eslint-disable-next-line no-unused-vars
		async deletePortion({ target, i }) {
			this.portions.splice(i, 1)
			const json = this.portions
			const url = buildUrl("restaurant/lunch/presistent/data/portions/delete")
			const response = await axiosDelete({ url, json })
			if (response) {
				this.$message.warn(response.message)
				this.forceRerender()
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe")
		},
		addPortion() {
			this.portions.push({
				title: "",
				body: "",
				ingredients: "",
				allergenic: "",
				price: "",
				price_additional: ""
			})
			this.updateData()
		},
		async updateData() {
			const json = {
				portions: window._.cloneDeep(this.portions),
				enabled: this.enabled
			}
			const url = buildUrl("restaurant/lunch/presistent/data/post")
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response.message)
			} else this.$message.error("Lounaan tallentamisessa tapahtui virhe")
		},
		async updateServiceHours() {
			const json = {
				service_hours: this.serviceHours,
				start: this.selectedDateRange.start,
				end: this.selectedDateRange.end
			}
			const url = buildUrl("restaurant/lunch/presistent/servicehours/post")
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response.message)
			} else this.$message.error("Lounaan tallentamisessa tapahtui virhe")
		},
		setSelectedDateRange(dateRange) {
			this.selectedDateRange.start = dateToStringYYYYMMDD(dateRange.start)
			this.selectedDateRange.end = dateToStringYYYYMMDD(dateRange.end)
			this.updateServiceHours()
		},
		hasSelectedDateRange() {
			const { start, end } = this.selectedDateRange
			if (start !== null || end !== null) return true
			return undefined
		},
		parseSelectedDateRange() {
			const dateRange = this.selectedDateRange
			if (!dateRange) return undefined
			const { start, end } = dateRange
			if (start === end) {
				return capitalize(
					format(Date.parse(start), "EEEEEE dd.MM.yyyy", {
						locale: fi
					})
				)
			}
			return `${capitalize(
				format(Date.parse(start), "EEEEEE dd.MM.yyyy", {
					locale: fi
				})
			)} -
			${capitalize(
				format(Date.parse(end), "EEEEEE dd.MM.yyyy", {
					locale: fi
				})
			)}
			`
		},
		selectedDateRangeClear() {
			this.selectedDateRange.start = null
			this.selectedDateRange.end = null
			this.forceRerender()
		},
		forceRerender() {
			this.componentKey += 1
		}
	},
	created() {
		this.updateData = window._.debounce(this.updateData, 2000)
		this.updateServiceHours = window._.debounce(this.updateServiceHours, 2000)
	},
	async mounted() {
		await this.init()
	}
}
</script>
