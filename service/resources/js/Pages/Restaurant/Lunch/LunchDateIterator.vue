<template>
	<div>
		<div v-for="(item, index) in items" :key="item + index" class="p-2">
			<div class="mt-3 py-6 text-grey-600 text-2xl text-center bg-gray-300">
				{{ parseDate(item.date) }}
			</div>
			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-evenly p-3 bg-gray-200"
				@change="updateDate(index)"
			>
				<div>
					<span class="pt-4 pb-1 pl-1 text-gray-700 block">Lounaan tyyppi</span>
					<jet-dropdown align="left" class="mt-1">
						<template #trigger>
							<button
								type="button"
								class="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
							>
								{{ setDefaultType(index) }}
								<TypeTranslate :text="item.type" />
								<JetDropdownSVG />
							</button>
						</template>
						<template #content>
							<jet-dropdown-item @clicked="updateType(null, index)"> (tyhjä) </jet-dropdown-item>
							<jet-dropdown-item @clicked="updateType('lunch', index)"> Lounas </jet-dropdown-item>
							<jet-dropdown-item @clicked="updateType('brunch', index)">
								Brunssi
							</jet-dropdown-item>
							<div class="border-t border-gray-100"></div>
						</template>
					</jet-dropdown>
				</div>
				<div class="text-center">
					<label>
						<span class="pt-4 pb-1 pl-1 text-gray-700 block">Tarjoiluaika</span>
						<input
							type="time"
							class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							name="start"
							step="300"
							:value="getServingTime('start', index)"
							@change="item.serving_time.start = $event.target.value"
						/>
						<b>-</b>
						<input
							type="time"
							class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							name="end"
							step="300"
							:value="getServingTime('end', index)"
							@change="item.serving_time.end = $event.target.value"
						/>
					</label>
				</div>
				<div>
					<label>
						<span class="pt-4 pb-1 pl-1 text-gray-700 block">Päivän hinta</span>
						<div class="flex mt-1">
							{{ setDefaultPrice(index) }}
							<input
								type="number"
								class="block rounded-md w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
								:value="item.price"
								@change="item.price = $event.target.value"
							/>
							<div class="pl-4 flex items-center">EUR</div>
						</div>
					</label>
				</div>
			</div>
			<LunchItemIterator
				:data="item.json"
				:date="item.date"
				:index="index"
				@delete="deleteItem"
				@change="updateItem"
				:key="componentKey"
			/>
			<div class="flex justify-center w-100 py-6">
				<jet-button class="px-12" @click.native="addItem(index)" action="add">
					Lisää uusi annos
				</jet-button>
			</div>
		</div>
	</div>
</template>
<script>
import JetButton from "@/Jetstream/Button";
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownItem from "@/Jetstream/DropdownItem";
import JetDropdownSVG from "@/Jetstream/DropDownSVG";

import { format } from "date-fns";
import fi from "date-fns/locale/fi";

import { capitalizeFormattedDate, ISOStringToDate } from "@/Helpers/dateFunctions";

import { axiosPost } from "@/Helpers/axios";
import {
	postRestaurantLunchApiUrl,
	postRestaurantLunchDateApiUrl,
	postRestaurantLunchDateServingTimesApiUrl,
	deleteRestaurantLunchApiUrl,
} from "@/Helpers/apiEndPoints";

import TypeTranslate from "./TypeTranslate";
import LunchItemIterator from "./LunchItemIterator";

export default {
	components: {
		JetButton,
		JetDropdown,
		JetDropdownItem,
		JetDropdownSVG,
		LunchItemIterator,
		TypeTranslate,
	},
	props: {
		data: { Type: Object },
		defaults: { Type: Object },
	},
	data() {
		return {
			items: undefined,
			componentKey: 0,
		};
	},
	watch: {
		data: {
			deep: true,
			immediate: true,
			handler() {
				this.items = window._.cloneDeep(this.data);
			},
		},
	},
	methods: {
		parseDate(date) {
			if (typeof date !== "string") {
				throw new Error(`parseDate(date) needs date as string but is: ${typeof date}.`);
			}
			let result;
			try {
				const isoString = `${date}T12:00:00.000Z`;
				result = capitalizeFormattedDate(
					format(Date.parse(ISOStringToDate(isoString)), "EEEEEE dd.MM.yyyy", {
						locale: fi,
					})
				);
			} catch (error) {
				console.error(`parseDate(date) is not valid date: ${date}`);
			}
			return result;
		},
		getServingTime(time, i) {
			if (time !== "start" && time !== "end") {
				throw new Error(`getServinGtime(time, i) needs time (start or end), but is: ${time}.`);
			}
			if (typeof i !== "number") {
				throw new Error(`getServinGtime(time, i) needs index as number but is: ${typeof i}.`);
			}
			const item = this.items[i];
			const { start, end } = item.serving_time;
			const { start: defaultStart, end: defaultEnd } = this.$props.defaults.serving_time;
			let result;
			let key;

			if (time === "start") {
				key = "start";
				if (start === undefined) {
					result = defaultStart;
					this.updateServingTimes();
				} else result = start;
			}
			if (time === "end") {
				key = "end";
				if (end === undefined) {
					result = defaultEnd;
					this.updateServingTimes();
				} else result = end;
			}
			if (key) {
				this.items[i].serving_time[key] = result;
			}
			return result;
		},

		async deleteItem({ index, i }) {
			const item = this.items[index].json;
			item.splice(i, 1);
			const json = JSON.stringify(this.items[index]);
			if (JSON.stringify(this.data[i]) === json) {
				return;
			}
			const url = deleteRestaurantLunchApiUrl();
			const response = await axiosPost({ url, json });
			if (response) {
				this.$message.warn(response);
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe");
			this.forceRerender();
		},
		addItem(i) {
			if (!this.items[i].json) {
				this.items[i].json = [];
			}
			this.items[i].json.push({
				title: "",
				body: "",
				ingredients: "",
				allergenic: "",
				price: "",
			});
			this.forceRerender();
		},
		async updateItem({ index, portions }) {
			const i = index;
			this.items[i].json = portions;
			const json = JSON.stringify(this.items[i]);
			if (JSON.stringify(this.data[i]) === json) {
				return;
			}
			const url = postRestaurantLunchApiUrl();
			const response = await axiosPost({ url, json });
			if (response) {
				this.$message.success(response);
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe");
		},

		setDefaultType(index) {
			const i = index;
			if (!this.items[i].type) this.items[i].type = this.defaults.type;
		},

		setDefaultPrice(index) {
			const i = index;
			if (!this.items[i].price) this.items[i].price = this.defaults.price;
		},

		updateType(type, index) {
			this.items[index].type = type;
			this.updateDate(index);
		},
		async updateDate(index) {
			const i = index;
			const data = window._.pick(this.items[i], ["date", "price", "serving_time", "type"]);
			const url = postRestaurantLunchDateApiUrl();
			const json = JSON.stringify(data);
			const response = await axiosPost({ url, json });
			if (response) {
				this.$message.success(response);
			} else this.$message.error("Päivän tallentamisessa tapahtui virhe");
		},
		async updateServingTimes() {
			// UPDATES OTHER DEFAULT VALUES TOO!
			const data = [];
			Object.keys(this.items).forEach((i) => {
				data.push(window._.pick(this.items[i], ["date", "serving_time", "type", "price"]));
			});
			const url = postRestaurantLunchDateServingTimesApiUrl();
			const json = JSON.stringify(data);
			const response = await axiosPost({ url, json });
			if (response) {
				this.$message.success(response);
			} else this.$message.error("Tarjoiluaikojen tallentamisessa tapahtui virhe");
		},

		forceRerender() {
			this.componentKey += 1;
		},
	},
	created() {
		this.updateDate = window._.debounce(this.updateDate, 1000);
		this.updateServingTimes = window._.debounce(this.updateServingTimes, 1000);
	},
};
</script>
