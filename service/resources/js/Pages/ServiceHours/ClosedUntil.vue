<template>
	<div>
		<div class="text-xl text-bold text-center mt-6 mb-3">
			{{ capitalize(translate(title)) }}n pidempiaikainen kiinniolo
		</div>
		<div class="text-bold text-center mt-6 mb-3">Avaamispäivä jos on tiedossa</div>
		<div class="flex justify-center">
			<div>
				<v-date-picker
					timezone="Europe/Helsinki"
					locale="fi"
					:min-date="new Date()"
					:value="closedUntil"
					@input="emitClosedUntil($event)"
				/>
				<div v-if="proxyClosedUntil" class="text-center">
					Valittu päivämäärä<br /><b>{{ toISOString(proxyClosedUntil) }}</b>
				</div>
				<div v-else class="text-green-600 text-center">Ei valittua päivämäärää</div>
			</div>
		</div>
	</div>
</template>

<script>
import { format } from "date-fns"
import fi from "date-fns/locale/fi"
import { capitalize } from "@/Helpers/js/common"
import { dateToStringYYYYMMDD, ISOStringToDate } from "@/Helpers/js/dateFunctions"

export default {
	props: {
		closedUntil: String,
		title: String,
		i: Number
	},
	data() {
		return {
			proxyClosedUntil: this.closedUntil
		}
	},
	methods: {
		emitClosedUntil(date) {
			const closedUntil = date ? dateToStringYYYYMMDD(date) : null
			const { i } = this
			this.proxyClosedUntil = closedUntil
			this.$emit("change", { i, closedUntil })
		},
		capitalize(string) {
			return capitalize(string)
		},
		translate(string) {
			if (string === "cafe") return "kahvila"
			if (string === "restaurant") return "ravintola"
			return undefined
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
