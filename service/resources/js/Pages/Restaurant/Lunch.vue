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
					<div class="p-6 sm:px-20 bg-white border-b border-gray-200">
						<div class="mt-8 text-2xl text-center">Valitse päivämäärä(t)</div>
						<div class="mt-6">
							<v-date-picker
								:value="null"
								:available-dates="datePicker.allowedDateRange"
								:model-config="datePicker.modelConfig"
								:first-day-of-week="2"
								locale="fi"
								@dayclick="datePickerOnClick"
								is-range
								is-expanded
								:columns="$screens({ default: 1, lg: 2 })"
							/>
						</div>
						<div class="grid justify-items-stretch">
							<div class="justify-self-center">
								<jet-button
									class="mt-6 pl-6 pr-6"
									:disabled="datePicker.disabledBeforeSelecting"
									@click.native="fetchData"
								>
									Hae tiedot
								</jet-button>
							</div>
						</div>
						<div class="mt-6">
							<JetSwitch
								label="Aikaraja on rajattu kahden (2) viikon mittaiseksi."
								:disabled="datePicker.disabledWhenSelecting"
								@change="datePicker.removeRangeLimit = !datePicker.removeRangeLimit"
							/>
						</div>
						<div class="mt-2">
							<JetSwitch
								label="Menneitä päiviä ei voi muokata."
								:disabled="datePicker.disabledWhenSelecting"
								@change="datePicker.allowPastDate = !datePicker.allowPastDate"
							/>
						</div>
						<div class="mt-6 text-green-600">
							<h1>{{ datePicker.selectedDateRange }}</h1>
						</div>
					</div>
					<DateIterator :data="lunches" />
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import JetSwitch from "@/Jetstream/Switch";
import JetButton from "@/Jetstream/Button";

import { correctOffset, addDays } from "@/Helpers/dateFunctions";

import { axios } from "@/Helpers/axios";
import { getRestaurantLunchApiUrl } from "@/Helpers/apiEndPoints";
import DateIterator from "./Components/Lunch/DateIterator";

import dummyData from "./dummyData.json";

const now = new Date();
export default {
	components: {
		AppLayout,
		JetSwitch,
		JetButton,
		DateIterator,
	},
	data() {
		return {
			datePicker: {
				removeRangeLimit: false,
				allowPastDate: false,
				allowedDateRange: { start: now, end: null },
				selectedDateRange: { start: null, end: null },
				disabledWhenSelecting: false,
				disabledBeforeSelecting: true,
			},
			lunches: dummyData,
		};
	},
	watch: {
		lunches() {
			console.log(this.lunches);
		},
		// eslint-disable-next-line func-names
		"datePicker.allowPastDate": function (val) {
			if (val === false) {
				this.datePicker.allowedDateRange.start = null;
			} else {
				this.datePicker.allowedDateRange.start = now;
			}
		},
		// eslint-disable-next-line func-names
		"datePicker.selectedDateRange.end": function (val) {
			if (val !== null) {
				this.datePicker.disabledBeforeSelecting = false;
			} else this.datePicker.disabledBeforeSelecting = true;
		},
	},
	methods: {
		datePickerOnClick(val) {
			const date = correctOffset(val.date);
			console.log(date);
			const {
				removeRangeLimit,
				allowPastDate,
				selectedDateRange,
				allowedDateRange,
			} = this.datePicker;
			if (selectedDateRange.start === null || selectedDateRange.end !== null) {
				this.datePicker.disabledWhenSelecting = true;

				selectedDateRange.start = date;
				selectedDateRange.end = null;

				allowedDateRange.start = date;

				if (removeRangeLimit) {
					allowedDateRange.end = addDays(date, 14);
				}
			} else if (selectedDateRange.end === null) {
				selectedDateRange.end = date;
				allowedDateRange.end = null;
				if (allowPastDate) {
					allowedDateRange.start = now;
				} else {
					allowedDateRange.start = null;
				}
				this.datePicker.disabledWhenSelecting = false;
			}
		},
		async fetchData() {
			const { start, end } = this.datePicker.selectedDateRange;
			const url = getRestaurantLunchApiUrl(start, end);
			const request = { url };
			const response = await axios(request);
			if (response) {
				this.lunches = response;
			}
		},
	},
};
</script>
