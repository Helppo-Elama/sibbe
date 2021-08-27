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
				Avaamme taas<br />
				<span class="open">{{ openNext.day }}na, kello {{ openNext.open }}.</span><br />
				<span class="bello">Tulkaa silloin uudestaan!</span>
			</h2>
		</div>
	</div>
</template>

<script lang="ts">
import { IServiceHour, IServiceHours } from "@d/interfaces/servicehours.interface"
import clonedeep from "lodash.clonedeep"
import Vue, { PropType } from "vue"

const now = new Date()
const dayIndex = now.getDay()

export default Vue.extend({
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
	data(): {
		openNow: boolean | undefined
		openNext: IServiceHour | undefined
		closingTime: { hours: string | undefined; minutes: string | undefined } | undefined
	} {
		return {
			openNow: undefined,
			openNext: undefined,
			closingTime: undefined
		}
	},
	watch: {
		openNow: {
			handler(val: boolean): void {
				const days: IServiceHours = clonedeep(this.$props.serviceHours)
				if (!val) {
					this.weekDayArray.every((el) => {
						if (days[el].isOpen && this.openNext === undefined) {
							this.openNext = days[el]
							return false
						}
						return true
					})
				}
				if (val) {
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
		isOpen(i: number): boolean | undefined {
			const hours = now.getHours()
			const minutes = now.getMinutes()
			const days: IServiceHours = clonedeep(this.$props.serviceHours)
			let result = false
			if (days[i].isOpen) {
				const day = days[i]
				const openHour = Number(day.open?.slice(0, 2))
				const openMinutes = Number(day.open?.slice(-2))
				const closeHour = Number(day.close?.slice(0, 2))
				const closeMinutes = Number(day.close?.slice(-2))
				if (openHour < hours && closeHour > hours) result = true
				else if (closeHour === hours && closeMinutes > minutes) result = true
				else if (openHour === hours && openMinutes < minutes) result = true
			}
			return result
		}
	},
	mounted(): void {
		this.openNow = this.isOpen(dayIndex)
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
