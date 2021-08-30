<template>
	<div>
		<h1 class="bello text-decoration-underline" :class="classList">Aukioloajat</h1>
		<div v-for="(openClosed, i) in computedServiceHours" :key="i">
			<div v-if="openClosed.open">
				<div v-if="openClosed.open.start === openClosed.open.end">
					<h4 class="museo">
						{{ capitalize(openClosed.open.start) }}: {{ openClosed.open.hours }}
					</h4>
				</div>
				<div v-if="openClosed.open.start !== openClosed.open.end">
					<h4 class="museo">
						{{ capitalize(openClosed.open.start) }} - {{ openClosed.open.end }}:
						{{ openClosed.open.hours }}
					</h4>
				</div>
			</div>

			<div v-if="openClosed.closed">
				<div v-if="openClosed.closed.start === openClosed.closed.end">
					<span
						>{{ capitalize(openClosed.closed.start) }}na:
						<span class="closed font-weight-bold"> suljettu</span></span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { IServiceHours, IWeekDays } from "@d/interfaces/servicehours.interface"
import { capitalize } from "@h/common"
import clonedeep from "lodash.clonedeep"
import Vue, { PropType } from "vue"

export default Vue.extend({
	name: "OpenClosed",
	components: {},
	props: {
		serviceHours: {
			type: Array as () => PropType<IServiceHours>,
			required: true
		},
		classList: {
			type: String,
			default: ""
		}
	},
	computed: {
		computedServiceHours() {
			const serviceHours: IServiceHours = clonedeep(this.$props.serviceHours)
			const days: IServiceHours = []
			let first
			serviceHours.forEach((day, i) => {
				if (i === 0) {
					first = day
				} else days[i - 1] = day
			})
			if (first) {
				days.push(first)
			}

			const openClosed: Array<
				Record<
					string,
					| { start: IWeekDays; end: IWeekDays | undefined; hours?: string }
					| { start: IWeekDays; end: IWeekDays | undefined }
				>
			> = []
			days.forEach((day, i) => {
				const len = +openClosed.length
				if (day.openToday) {
					if (
						len !== 0 &&
						day.open === days[i - 1].open &&
						day.close === days[i - 1].close &&
						Object.prototype.hasOwnProperty.call(openClosed[len - 1], "open")
					) {
						openClosed[len - 1].open.end = day.day
					} else
						openClosed.push({
							open: { start: day.day, end: day.day, hours: `${day.open} - ${day.close}` }
						})
				} else {
					openClosed.push({
						closed: { start: day.day, end: day.day }
					})
				}
			})
			return openClosed
		}
	},
	methods: {
		capitalize(string: string): string {
			return capitalize(string)
		}
	}
})
</script>
<style lang="scss" scoped>
.closed {
	color: $color2;
}
.open {
	color: $color3;
}
</style>
