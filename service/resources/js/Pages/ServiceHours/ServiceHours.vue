<template>
	<app-layout>
		<template #header>
			<h2 class="font-semibold text-xl text-gray-800 text-2xl text-center">Aukioloajat</h2>
		</template>
		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="bg-white shadow-xl sm:rounded-lg">
					<div class="text-center pt-2 px-3 sm:px-5">
						<span class="font-semibold underline">Aukioloaikojen täyttöohje</span><br />
						Raksi ruudussa merkitsee sitä että olemme auki. <br /><br />Täyttäkää huolellisesti
						kohdat, jotka pyydetään täyttämään. Jos olemme auki ja jokin aika puuttuu niin se tulee
						puuttumaan myös asiakasnäkymästä.<br /><br />
						Jos olemme kiinni - ajoilla ei ole väliä.
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div
							v-for="(d, i) in data"
							:key="d.title"
							class="py-6 px-3 sm:px-5 md:px-20 bg-white border-b border-gray-200"
							@change="update(i)"
						>
							<div>
								<div class="mt-8 text-2xl text-center">
									{{ translate(d.title) }}
								</div>
								<div class="mt-6" />
								<div class="grid justify-items-stretch">
									<div class="justify-self-center">
										<table class="table-auto break-long-words">
											<thead class="text-center font-semibold">
												<th class="px-1"></th>
												<th class="px-1">Viikon&shy;päivä</th>
												<th class="px-1">Avataan</th>
												<th class="px-1">&nbsp;</th>
												<th class="px-1">Suljetaan</th>
											</thead>
											<tr
												v-for="(day, j) in d.json"
												:key="j"
												:class="{ 'text-red-500': !day.openToday }"
											>
												<td>
													<input
														class="ml-3 mr-1 rounded-md"
														type="checkbox"
														v-model="day.openToday"
													/>
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
															focus:border-indigo-300
															focus:ring
															focus:ring-indigo-200
															focus:ring-opacity-50
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
															focus:border-indigo-300
															focus:ring
															focus:ring-indigo-200
															focus:ring-opacity-50
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout"

import { axiosPost } from "@/Helpers/axios"

import { postServiceHourApiUrl } from "@/Helpers/apiEndPoints"

const url = postServiceHourApiUrl()

export default {
	components: {
		AppLayout
	},
	props: {
		data: Array
	},
	methods: {
		notValid(string) {
			if (!string || !string.match(/\d+:\d+/)) {
				return true
			}
			return false
		},
		translate(string) {
			if (string === "cafe") return "Kahvila"
			if (string === "restaurant") return "Ravintola"
			return undefined
		},
		async update(i) {
			const data = window._.pick(this.$props.data[i], ["title", "json"])
			const l = data.json.length
			for (let j = 0; j < l; j += 1) {
				const day = data.json[j]
				if (day.open === (undefined || "")) data.json[j].open = null
				if (day.close === (undefined || "")) data.json[j].close = null
			}
			const json = JSON.stringify(data)
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response)
			} else this.$message.error("Tietojen tallentamisessa tapahtui virhe")
		}
	},
	created() {
		this.update = window._.debounce(this.update, 1000)
	}
}
</script>
<style scoped>
tr:nth-child(2n) {
	background-color: rgba(0, 0, 0, 0.05);
}
</style>
