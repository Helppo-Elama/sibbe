<template>
	<div>
		<div class="font-bold py-2"><slot></slot></div>
		<v-date-picker
			timezone="Europe/Helsinki"
			locale="fi"
			:min-date="new Date()"
			:value="date"
			@input="emitDate($event)"
		/>
		<div v-if="proxyDate" class="text-center">
			Valittu päivämäärä<br /><b>{{ toISOString(proxyDate) }}</b>
		</div>
		<div v-else class="text-green-600 text-center">Ei valittua päivämäärää</div>
	</div>
</template>

<script>
import { format } from "date-fns"
import fi from "date-fns/locale/fi"
import { capitalize } from "@/Helpers/js/common"
import { dateToStringYYYYMMDD, ISOStringToDate } from "@/Helpers/js/dateFunctions"

export default {
	props: {
		date: {
			type: String
		}
	},
	data() {
		return {
			proxyDate: this.date
		}
	},
	methods: {
		emitDate(dateAsDate) {
			const date = dateAsDate ? dateToStringYYYYMMDD(dateAsDate) : null
			this.proxyDate = date
			this.$emit("change", date)
		},

		toISOString(date) {
			if (!date) return undefined
			const isoString = `${date}T12:00:00.000Z`
			return capitalize(
				format(Date.parse(ISOStringToDate(isoString)), "EEEEEE dd.MM.yyyy", {
					locale: fi
				})
			)
		}
	}
}
</script>

<style></style>
