<template>
	<div>
		<div id="open" :class="{ 'd-none': !openNow }">
			<h2 class="museo" :class="classList">Kyllä, olemme</h2>
			<h1 class="museo open">avoinna!</h1>
			<h2 class="bello pt-2" :class="classList">Tulkaapa siis herkuttelemaan.</h2>
			<h2 v-if="closingTime" class="museo pt-2" :class="classList">
				Suljemme tänään <br />kello
				<span class="closed">{{ closingTime.hours }}:{{ closingTime.minutes }}</span>
			</h2>
		</div>
		<div id="close" :class="{ 'd-none': openNow }">
			<h2 class="museo" :class="classList">Valitettavasti olemme</h2>
			<h1 class="museo closed">Suljettu juuri nyt.</h1>
			<h2 v-if="openNext !== undefined" class="museo pt-2" :class="classList">
				Avaamme taas
				<span v-if="!openLaterToday" class="open"
					>{{ openNext.day }}na kello {{ openNext.open }}.</span
				>
				<span v-if="openLaterToday" class="open">{{ openNext.day }} kello {{ openNext.open }}.</span
				><br />
				<span class="bello">Tulkaa silloin uudestaan!</span>
			</h2>
		</div>
	</div>
</template>

<script lang="ts">
import { IServiceHour, IServiceHours } from "@d/interfaces/servicehours.interface"
import clonedeep from "lodash.clonedeep"
import Vue, { PropType } from "vue"

type IOpenToday = undefined | boolean | "openToday"

const now = new Date()
const dayIndex = now.getDay()

export default Vue.extend({
	components: {},
	props: {
		serviceHours: {
			type: Object as () => PropType<IServiceHours>,
			required: true
		},
		classList: {
			type: String,
			default: ""
		}
	},
	data(): {
		openNow: IOpenToday
		openNext: IServiceHour | undefined
		openLaterToday: boolean | undefined
		closingTime: { hours: string | undefined; minutes: string | undefined } | undefined
	} {
		return {
			openNow: undefined,
			openLaterToday: undefined,
			openNext: undefined,
			closingTime: undefined
		}
	},
	watch: {
		openNow: {
			handler(val: IOpenToday): void {
				const days: IServiceHours = clonedeep(this.$props.serviceHours.json)
				if (val === undefined) return
				if (!val) {
					this.weekDayArray.forEach((el) => {
						if (days[el].openToday && this.openNext === undefined) {
							this.openNext = days[el]
						}
					})
				}
				if (this.openLaterToday === true) {
					this.openNext = days[dayIndex]
					this.openNext.day = "tänään"
				} else {
					const day = days[dayIndex]
					this.closingTime = {
						hours: day.close?.slice(0, 2),
						minutes: day.close?.slice(-2)
					}
				}
			}
		}
	},
	computed: {
		weekDayArray(): Array<number> {
			const array = Array.from(Array(7).keys())
			let result: Array<number> = []
			const rest: Array<number> = []
			array.forEach((el) => {
				if (el > dayIndex && el <= 6) {
					result.push(el)
				} else rest.push(el)
			})
			result = result.concat(rest)
			return result
		}
	},
	methods: {
		openToday(i: number): boolean | undefined {
			const hours = now.getHours()
			const minutes = now.getMinutes()
			const days: IServiceHours = clonedeep(this.$props.serviceHours.json)
			let result: IOpenToday = false
			if (i > 6) {
				return undefined
			}
			if (days[i].openToday) {
				const day = days[i]
				const openHour = Number(day.open?.slice(0, 2))
				const openMinutes = Number(day.open?.slice(-2))
				const closeHour = Number(day.close?.slice(0, 2))
				const closeMinutes = Number(day.close?.slice(-2))
				if (openHour < hours && closeHour > hours) result = true
				else if (closeHour === hours && closeMinutes > minutes) result = true
				else if (openHour === hours && openMinutes < minutes) result = true
				else if (hours < openHour) this.openLaterToday = true
			}
			return result
		}
	},
	mounted(): void {
		this.openNow = this.openToday(dayIndex)
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
