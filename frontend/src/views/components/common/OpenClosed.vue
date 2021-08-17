<template>
	<div>
		<div ref="open" class="d-none">
			<h2 class="museo" :class="classList">Kyllä, olemme</h2>
			<h1 class="museo open">avoinna!</h1>
			<h2 class="bello pt-2" :class="classList">Tulkaapa siis herkuttelemaan.</h2>
			<h2 v-if="closingTime" class="museo pt-2" :class="classList">
				Suljemme tänään <br />kello
				<span class="closed">{{ closingTime.hours }}:{{ closingTime.minutes }}</span>
			</h2>
		</div>
		<div ref="closed" class="d-none">
			<h2 class="museo" :class="classList">Valitettavasti olemme</h2>
			<h1 class="museo closed">Suljettu juuri nyt.</h1>
			<h2 v-if="nextOpen" class="museo pt-2" :class="classList">
				Avaamme taas<br />
				<span class="open">{{ nextOpen.date }}, kello {{ nextOpen.time }}.</span><br />
				<span class="bello">Tulkaa silloin uudestaan!</span>
			</h2>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { IOpeningHours, IOpeningPeriods } from "@d/interfaces/maps.interface";

import { capitalizeFormattedDate } from "@h/dateExtensions";

import { format, compareAsc } from "date-fns";
import { fi } from "date-fns/locale";

export default Vue.extend({
	name: "OpenClosed",
	props: {
		openClosed: {
			type: Object as () => PropType<{ isOpen: boolean; periods: IOpeningPeriods }>,
		},
		classList: {
			type: String,
			default: "",
		},
	},
	watch: {
		openClosed: function () {
			this.refresh();
		},
	},
	data(): {
		openingHours: IOpeningHours | undefined;
		nextOpen: { date: string; time: string } | undefined;
		closingTime: { hours: string; minutes: string } | undefined;
	} {
		return { openingHours: undefined, nextOpen: undefined, closingTime: undefined };
	},
	methods: {
		refresh() {
			console.log(this.$props.openClosed);
			const { isOpen, periods } = this.$props.openClosed;
			if (isOpen) {
				//GET CLOSING TIME ARRAY WITH DAYS
				const close: Array<number> = [];
				for (let [day] of periods.entries()) {
					close.push(periods[day].close.day);
				}
				const now = new Date().getDay();
				//FIND INDEX FROM CLOSING TIME ARRAY
				const index = close.findIndex((x) => x === now);
				if (index >= 0) {
					this.closingTime = {
						hours: periods[index as number].close.time.slice(0, 2),
						minutes: periods[index as number].close.time.slice(2),
					};
				}

				(this.$refs["closed"] as HTMLElement).classList.add("d-none");
				(this.$refs["open"] as HTMLElement).classList.remove("d-none");
			} else {
				(this.$refs["open"] as HTMLElement).classList.add("d-none");
				(this.$refs["closed"] as HTMLElement).classList.remove("d-none");

				// GET NEXT OPEN DATES
				const openDays: Array<Date> = [];
				for (const nextOpenDay of periods) {
					openDays.push(new Date(nextOpenDay.open.nextDate));
				}
				openDays.sort(compareAsc);
				// SHOW NEXT OPEN DATE
				const nextOpenDay = openDays[0];
				let now = new Date();
				let nextOpen = {
					date: "",
					time: format(nextOpenDay, "HH:mm", { locale: fi }),
				};
				if (now.getDate() === nextOpenDay.getDate()) nextOpen.date = "Tänään";
				else {
					nextOpen.date = capitalizeFormattedDate(
						format(nextOpenDay, "EEEE dd.MM.yyyy", {
							locale: fi,
						})
					);
				}
				this.nextOpen = nextOpen;
			}
		},
	},
	mounted(): void {
		console.log("🎇 Open/Closed mounted!");
	},
});
</script>
<style lang="scss" scoped>
.closed {
	color: $color2;
}
.open {
	color: $color3;
}
</style>
