<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0">
			<v-col cols="12">
				<h3 class="museo museo-heading pt-16 pb-16"><slot></slot></h3>
			</v-col>
			<template v-for="(item, i) in items" cols="12" md="6" lg="4">
				<template v-if="availableToday(item.date, +i)">
					<v-col v-if="item.json" :key="item.type + i" cols="12" md="6" lg="4">
						<div class="align-center mb-4">
							<h4 class="museo">{{ lunchDate(item.date) }}</h4>
							<h4 v-if="item.type" class="display-1 museo">{{ lunchType(item.type) }}</h4>
							<h4 v-else class="display-1 museo"><br /></h4>
							<h5 v-if="item.serving_time.start">
								Tarjoiluaika: {{ item.serving_time.start }} - {{ item.serving_time.end }}
							</h5>
							<h5 v-else class="dislpay-1 museo"><br /></h5>
							<h5 v-if="item.price" class="pt-5">Päivän hinta: {{ item.price }} EUR</h5>
							<h5 v-else class="dislpay-1 museo pt-5"><br /></h5>
						</div>
						<HorizontalLine :class-list="classList" />
						<div v-for="(it, x) in item.json" :key="it.title + x" class="pl-10 pr-10 pb-5">
							<v-container fluid class="pa-0 ma-0">
								<v-row class="text-left pb-5" no-gutters>
									<v-col cols="8"
										><b v-if="it.title">{{ x + 1 }}. {{ it.title }}</b>
										<b v-else>
											<br />
										</b>
									</v-col>
									<v-col v-if="it.price" cols="4" class="text-right"
										><b>{{ it.price }} EUR</b></v-col
									>
									<v-col v-if="it.body" cols="12" class="pt-2 pl-5">{{ item.body }}</v-col>
									<v-col v-if="it.ingredients" cols="12" class="pt-2 pl-5">{{
										item.ingredients
									}}</v-col>
									<v-col v-if="it.allergenic" cols="12" class="pt-2 pl-5"
										><i>{{ it.allergenic }}</i></v-col
									>
								</v-row>
							</v-container>
						</div>
					</v-col>
				</template>
			</template>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import HorizontalLine from "@c/common/HorizontalLine.vue"
import { IMenu } from "@d/interfaces/menu.interface"
import { capitalize } from "@h/common"
import { dateToStringYYYYMMDD } from "@h/dateExtensions"
import { compareAsc, format } from "date-fns"
import { fi } from "date-fns/locale"
import Vue, { PropType } from "vue"

const now = dateToStringYYYYMMDD(new Date())
const nowDate = new Date()

export default Vue.extend({
	props: {
		items: { type: Array as () => PropType<IMenu>, required: true },
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
	methods: {
		availableToday(date: string, index: number): boolean {
			const i = index
			let result = true
			if (date === now) {
				if (this.$props.items[i].serving_time) {
					const { end } = this.$props.items[i].serving_time
					if (end) {
						const endDate = new Date()
						endDate.setHours(end.slice(0, 2))
						endDate.setMinutes(end.slice(-2))
						endDate.setSeconds(0)
						if (compareAsc(endDate, nowDate) === -1) {
							result = false
						}
					}
				}
			}
			return result
		},
		lunchType(type: string): string | undefined {
			let result
			if (type === "lunch") result = "Lounas"
			if (type === "brunch") result = "Brunssi"
			return result
		},
		lunchDate(date: string): string | undefined {
			let result
			if (date === now) result = "Tänään"
			else {
				result = capitalize(
					format(Date.parse(date), "EEEE dd.MM.yyyy", {
						locale: fi
					})
				)
			}
			return result
		}
	},
	mounted(): void {
		console.log("😀 Lunch parser mounted!")
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
</style>
