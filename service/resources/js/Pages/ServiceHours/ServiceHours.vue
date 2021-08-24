<template>
	<app-layout>
		<template #header>
			<h2 class="font-semibold text-xl text-gray-800 text-2xl text-center">
				Aukioloajat & yksityistilaisuudet
			</h2>
		</template>
		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="bg-white shadow-xl sm:rounded-lg">
					<div
						v-for="serviceHour in serviceHours"
						:key="serviceHour.title"
						class="py-6 px-3 sm:px-5 md:px-20 bg-white border-b border-gray-200"
					>
						<div class="mt-8 text-2xl text-center">
							{{ capitalize(serviceHour.title) }}
						</div>
						<div class="mt-6" />
						<div class="grid justify-items-stretch">
							<div class="justify-self-center">
								<table class="table-auto break-long-words">
									<thead class="text-center font-semibold">
										<th class="px-1">Viikon&shy;päivä</th>
										<th class="px-1">Avataan</th>
										<th class="px-1">&nbsp;</th>
										<th class="px-1">Suljetaan</th>
									</thead>
									<tr
										v-for="(day, i) in serviceHour.days"
										:key="i"
										:class="{ 'text-red-600': !day.isOpen }"
									>
										<td>
											<input class="pr-1 rounded-md" type="checkbox" v-model="day.isOpen" />
											<span class="pr-2">
												{{ day.day }}
											</span>
										</td>
										<td>
											<input
												:disabled="!day.isOpen"
												:class="('text-red-600', day.isOpen)"
												type="time"
												class="
													mt-1
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
										</td>
										<td class="text-center">-</td>
										<td>
											<input
												type="time"
												:disabled="!day.isOpen"
												class="
													mt-1
													rounded-md
													border-gray-300
													shadow-sm
													focus:border-indigo-300
													focus:ring
													focus:ring-indigo-200
													focus:ring-opacity-50
												"
												v-model="day.close"
											/>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";

import serviceHours from "@/Helpers/serviceHours";

import { capitalize } from "@/Helpers/common";

export default {
	components: {
		AppLayout,
	},
	data() {
		return {
			serviceHours,
		};
	},
	watch: {},
	methods: {
		capitalize(string) {
			return capitalize(string);
		},
	},
};
</script>
