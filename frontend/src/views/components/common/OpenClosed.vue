<template>
	<div>
		<div ref="open" class="d-none">
			<h2 class="museo">Kyllä, olemme</h2>
			<h1 class="museo open">avoinna!</h1>
			<h2 class="bello pt-2">Tulkaapa siis herkuttelemaan.</h2>
		</div>
		<div ref="closed" class="d-none">
			<h2 class="museo">Valitettavasti olemme</h2>
			<h1 class="museo closed">Suljettu juuri nyt.</h1>
			<h2 v-if="nextOpenTime" class="bello pt-2">
				Avaamme taas<br />
				<span class="museo open">{{ nextOpenTime.day }}, kello {{ nextOpenTime.time }}.</span><br />
				Tulkaa silloin uudestaan!
			</h2>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { IOpeningHours, IOpeningPeriods } from "@d/interfaces/maps.interface";

import "@h/dateExtensions";

const getIndex = (days: Array<number>, open: Array<number>): number | undefined => {
	for (let day of days) {
		const index = open.findIndex((x) => x === day);
		if (index >= 0) {
			return index as number;
		}
	}
	return;
};

const getWeekDayAsText = (now: number, day: number): string | undefined => {
	if (now === day) {
		return "Tänään";
	} else if (day >= 0 && day <= 6) {
		const arrayOfWeekdays = [
			"Sunnuntaina",
			"Maanantaina",
			"Tiistaina",
			"Keskiviikkona",
			"Torstaina",
			"Perjantaina",
			"Lauantaina",
		];
		return arrayOfWeekdays[day];
	} else {
		throw "❌ Day should be integer between 0-6 and is now: " + day;
	}
};

export default Vue.extend({
	name: "OpenClosed",
	props: {
		openClosed: {
			type: Object as () => PropType<{ isOpen: boolean; periods: IOpeningPeriods }>,
		},
	},
	watch: {
		openClosed: function () {
			this.refresh();
		},
	},
	data(): {
		openingHours: IOpeningHours | undefined;
		nextOpenTime: { day: string; time: string } | undefined;
	} {
		return { openingHours: undefined, nextOpenTime: undefined };
	},
	methods: {
		refresh() {
			const { isOpen, periods } = this.$props.openClosed;
			if (isOpen) {
				(this.$refs["closed"] as HTMLElement).classList.add("d-none");
				(this.$refs["open"] as HTMLElement).classList.remove("d-none");
			} else {
				(this.$refs["open"] as HTMLElement).classList.add("d-none");
				(this.$refs["closed"] as HTMLElement).classList.remove("d-none");

				const open: Array<number> = [];
				for (let [day] of periods.entries()) {
					open.push(periods[day].open.day);
				}
				const now = new Date().getDay();
				let start: Array<number> = [];
				let end: Array<number> = [];
				for (let i = 0; i <= 6; i += 1) {
					if (i >= now) {
						start.push(i);
					} else {
						end.push(i);
					}
				}
				const days = start.concat(end);

				const index = getIndex(days, open);
				if (index) {
					const openDay = periods[index as number].open;
					const day = getWeekDayAsText(now, openDay.day);
					this.nextOpenTime = {
						day: day as string,
						time: openDay.time.slice(0, 2) + ":" + openDay.time.slice(2),
					};
				}
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
