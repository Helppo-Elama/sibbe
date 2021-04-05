<template>
	<div class="bg-gray-200 bg-opacity-25">
		<div class="p-4">
			<div v-for="(lunch, lunchIndex) in lunches" :key="lunch + lunchIndex">
				<div class="p-4 rounded-xl shadow-md">
					<div class="pb-6 text-grey-600 text-2xl text-center">
						{{ parseDate(lunch.date) }}
					</div>
					<div
						class="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-evenly"
						@change="updateDate(lunchIndex)"
					>
						<div>
							<jet-dropdown align="left" width="48" class="pt-4 pb-1 pl-1">
								<template #trigger>
									<span class="inline-flex rounded-md">
										<button
											type="button"
											class="inline-flex items-center border border-transparent rounded-md hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
										>
											Lounaan tyypi
											<JetDropdownSVG />
										</button>
									</span>
								</template>
								<template #content>
									<jet-dropdown-item @clicked="updateLunchType(null, lunchIndex)">
										(tyhjä)
									</jet-dropdown-item>
									<jet-dropdown-item @clicked="updateLunchType('lunch', lunchIndex)">
										Lounas
									</jet-dropdown-item>
									<jet-dropdown-item @clicked="updateLunchType('brunch', lunchIndex)">
										Brunssi
									</jet-dropdown-item>
									<div class="border-t border-gray-100"></div>
								</template>
							</jet-dropdown>
							<TypeTranslate :text="lunch.type" class="pl-6" />
						</div>
						<div>
							<label>
								<span class="pt-4 pb-1 pl-1 text-gray-700 block">Tarjoiluaika</span>
								<input
									type="text"
									class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
									:value="lunch.hours"
									@change="lunch.hours = $event.target.value"
								/>
							</label>
						</div>
						<div>
							<label>
								<span class="pt-4 pb-1 pl-1 text-gray-700 block">Päivän hinta</span>
								<div class="flex mt-1">
									<input
										type="number"
										class="block rounded-md w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
										:value="lunch.price"
										@change="lunch.price = $event.target.value"
									/>
									<div class="pl-4 flex items-center">EUR</div>
								</div>
							</label>
						</div>
						<hr class="mt-4" />
					</div>
					<PortionIterator
						:data="lunch.json"
						:date="lunch.date"
						:lunchIndex="lunchIndex"
						@delete="deletePortion"
						@change="updatePortion"
					/>
					<div class="flex justify-center w-100 py-6">
						<jet-button class="px-12" @click.native="addPortion(lunchIndex)" action="add">
							Lisää uusi annos
						</jet-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { format } from "date-fns";
import fi from "date-fns/locale/fi";
import { capitalizeFormattedDate, ISOStringToDate } from "@/Helpers/dateFunctions";
import JetButton from "@/Jetstream/Button";
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownItem from "@/Jetstream/DropdownItem";
import JetDropdownSVG from "@/Jetstream/DropDownSVG";
import { axiosPost } from "@/Helpers/axios";
import { postRestaurantLunchApiUrl, postRestaurantLunchDateApiUrl } from "@/Helpers/apiEndPoints";
import TypeTranslate from "./TypeTranslate";
import PortionIterator from "./PortionIterator";

export default {
	components: {
		JetButton,
		JetDropdown,
		JetDropdownItem,
		JetDropdownSVG,
		PortionIterator,
		TypeTranslate,
	},
	props: {
		data: { Type: Object },
	},
	data() {
		return {
			lunches: "",
		};
	},
	watch: {
		data: {
			deep: true,
			immediate: true,
			handler() {
				this.lunches = window._.cloneDeep(this.data);
			},
		},
	},
	methods: {
		parseDate(date) {
			const isoString = `${date}T12:00:00.000Z`;
			const result = capitalizeFormattedDate(
				format(Date.parse(ISOStringToDate(isoString)), "EEEEEE dd.MM.yyyy", {
					locale: fi,
				})
			);
			return result;
		},
		deletePortion({ lunchIndex, portionIndex }) {
			const portion = this.lunches[lunchIndex].json;
			portion.splice(portionIndex, 1);
		},
		addPortion(lunchIndex) {
			if (!this.lunches[lunchIndex].json) {
				this.lunches[lunchIndex].json = [];
			}
			this.lunches[lunchIndex].json.push({
				title: "",
				body: "",
				ingredients: "",
				allergenic: "",
				price: "",
			});
		},

		async updatePortion(i) {
			let update = true;
			const json = JSON.stringify(this.lunches[i]);
			if (JSON.stringify(this.data[i]) === json) {
				update = false;
			}
			if (update) {
				const url = postRestaurantLunchApiUrl();
				const response = await axiosPost({ url, json });
				if (response) {
					this.$message.success(response);
				} else this.$message.error("Lounaan tallentamisessa tapahtui virhe");
			}
		},
		updateLunchType(type, lunchIndex) {
			const i = lunchIndex;
			this.lunches[i].type = type;
			this.updateDate(i);
		},
		async updateDate(lunchIndex) {
			const i = lunchIndex;
			const data = window._.omit(this.lunches[i], ["created_at", "id", "json", "updated_at"]);
			const url = postRestaurantLunchDateApiUrl();
			const json = JSON.stringify(data);
			const response = await axiosPost({ url, json });
			if (response) {
				this.$message.success(response);
			} else this.$message.error("Päivän tallentamisessa tapahtui virhe");
		},
	},
	created() {
		this.updateDate = window._.debounce(this.updateDate, 2000);
	},
};
</script>
