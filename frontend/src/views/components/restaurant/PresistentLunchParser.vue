<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0">
			<v-col cols="12">
				<h3 class="museo museo-heading pt-16 pb-16"><slot /></h3>
			</v-col>
			<v-col cols="12">
				<h4 class="museo">Tarjoiluajat</h4>
				<div v-for="(openClosed, i) in computedServiceHours" :key="i">
					<div v-if="openClosed.open">
						<div v-if="openClosed.open.start === openClosed.open.end">
							<h4>{{ capitalize(openClosed.open.start) }}: {{ openClosed.open.hours }}</h4>
						</div>
						<div v-if="openClosed.open.start !== openClosed.open.end">
							<h4>
								{{ capitalize(openClosed.open.start) }} - {{ openClosed.open.end }}:
								{{ openClosed.open.hours }}
							</h4>
						</div>
					</div>
					<!--
					<div v-if="openClosed.closed">
						<div v-if="openClosed.closed.start === openClosed.closed.end">
							<span
								>{{ capitalize(openClosed.closed.start) }}na:
								<span class="closed font-weight-bold"> Ei lounastarjoilua</span></span
							>
						</div>
					</div>
					-->
				</div>
				<span class="closed font-weight-bold">Muina päivinä ei lounastarjoilua</span>
			</v-col>
			<v-col v-if="$vuetify.breakpoint.mdAndUp" md="2" lg="3" xl="4"></v-col>
			<v-col md="8" lg="6" xl="4">
				<HorizontalLine :class-list="classList" />
				<div
					v-for="(it, x) in data.presistentLunch.portions"
					:key="it.title + x"
					class="pl-10 pr-10 pb-5"
				>
					<v-container fluid class="pa-0 ma-0">
						<v-row class="text-left pb-5" no-gutters>
							<v-col cols="8"
								><b v-if="it.title">{{ x + 1 }}. {{ it.title }}</b>
								<b v-else>
									<br />
								</b>
							</v-col>
							<v-col cols="4" class="text-right">
								<b
									>{{ it.price }}
									<span v-if="it.price_additional"> - {{ it.price_additional }}</span>
									EUR</b
								>
							</v-col>
							<v-col v-if="it.body" cols="12" class="pt-2 pl-5">{{ it.body }}</v-col>
							<v-col v-if="it.ingredients" cols="12" class="pt-2 pl-5">{{ it.ingredients }}</v-col>
							<v-col v-if="it.allergenic" cols="12" class="pt-2 pl-5"
								><i>{{ it.allergenic }}</i></v-col
							>
						</v-row>
					</v-container>
				</div>
			</v-col>
			<v-col v-if="$vuetify.breakpoint.mdAndUp" md="2" lg="3" xl="4"></v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import HorizontalLine from "@c/common/HorizontalLine.vue"
import { ILunch } from "@d/interfaces/menu.interface"
import { IOpenClosed, IServiceHours } from "@d/interfaces/servicehours.interface"
import { capitalize } from "@h/common"
import clonedeep from "lodash.clonedeep"
import Vue, { PropType } from "vue"

export default Vue.extend({
	props: {
		data: { type: Object as () => PropType<ILunch>, required: true },
		color: {
			type: String,
			default() {
				return undefined
			}
		},
		classList: {
			type: String,
			default() {
				return undefined
			}
		}
	},
	components: { HorizontalLine },
	computed: {
		computedServiceHours() {
			const serviceHours: IServiceHours = clonedeep(this.$props.data.serviceHours.json)
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
			const openClosed: IOpenClosed = []
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
hr {
	line-height: 1em;
	position: relative;
	outline: 0;
	border: 0;
	color: $color1;
	text-align: center;
	height: 1.5em;
	&:before {
		content: "";
		background: linear-gradient(to right, transparent, $color1, transparent);
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
	}
	&:after {
		content: attr(data-content);
		position: relative;
		display: inline-block;
		color: $color1;

		padding: 0 0.5em;
		line-height: 1.5em;
		color: $color1;
		background-color: $color4;
	}
}
.closed {
	color: $color2;
}
.open {
	color: $color3;
}
</style>
