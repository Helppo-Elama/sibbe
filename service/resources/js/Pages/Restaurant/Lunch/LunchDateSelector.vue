<template>
	<div class="py-6 px-3 sm:px-5 md:px-20 bg-white border-b border-gray-200">
		<div class="text-2xl text-center">Päiväkohtainen lounaslista</div>
		<div class="mt-6">
			<v-date-picker
				:value="null"
				:available-dates="allowedDateRange"
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
					:disabled="disabledBeforeSelecting"
					@click.native="emitFetchData"
				>
					Hae tiedot
				</jet-button>
			</div>
		</div>
		<div class="mt-6">
			<jet-switch :disabled="disabledWhenSelecting" @change="removeRangeLimit = !removeRangeLimit"
				>Aikaraja on rajattu kahden (2) viikon mittaiseksi.</jet-switch
			>
		</div>
		<div class="mt-2">
			<jet-switch :disabled="disabledWhenSelecting" @change="allowPastDate = !allowPastDate">
				Menneitä päiviä ei voi muokata.</jet-switch
			>
		</div>
	</div>
</template>

<script>
import JetSwitch from "@/Jetstream/Switch"
import JetButton from "@/Jetstream/Button"

import { correctOffset, addDays } from "@/Helpers/js/dateFunctions"

const now = new Date()

export default {
	components: {
		JetSwitch,
		JetButton
	},
	data() {
		return {
			removeRangeLimit: false,
			allowPastDate: false,
			allowedDateRange: { start: now, end: null },
			selectedDateRange: { start: null, end: null },
			disabledWhenSelecting: false,
			disabledBeforeSelecting: true
		}
	},
	watch: {
		// eslint-disable-next-line func-names
		allowPastDate(val) {
			if (val === false) {
				this.allowedDateRange.start = null
			} else {
				this.allowedDateRange.start = now
			}
		},
		// eslint-disable-next-line func-names
		"selectedDateRange.end": function (val) {
			if (val !== null) {
				this.disabledBeforeSelecting = false
			} else this.disabledBeforeSelecting = true
		}
	},
	methods: {
		datePickerOnClick(val) {
			const date = correctOffset(val.date)
			const { removeRangeLimit, allowPastDate, selectedDateRange, allowedDateRange } = this
			if (selectedDateRange.start === null || selectedDateRange.end !== null) {
				this.disabledWhenSelecting = true

				selectedDateRange.start = date
				selectedDateRange.end = null

				allowedDateRange.start = date

				if (removeRangeLimit) {
					allowedDateRange.end = addDays(date, 14)
				}
			} else if (selectedDateRange.end === null) {
				selectedDateRange.end = date
				allowedDateRange.end = null
				if (allowPastDate) {
					allowedDateRange.start = now
				} else {
					allowedDateRange.start = null
				}
				this.disabledWhenSelecting = false
			}
		},
		emitFetchData() {
			this.$emit("change", this.selectedDateRange)
		}
	}
}
</script>
