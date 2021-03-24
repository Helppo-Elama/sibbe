<template>
	<div class="bg-gray-200 bg-opacity-25">
		<div class="p-4">
			<div v-for="(lunch, lunchIndex) in lunches" :key="lunch + lunchIndex">
				<div class="p-4 rounded-xl shadow-md">
					<div class="pb-6 text-grey-600 text-2xl text-center">
						{{ parseDate(lunch.date) }}
						<hr class="mt-4" />
					</div>
					<PortionIterator
						:data="lunch.json"
						:date="lunch.date"
						:lunchIndex="lunchIndex"
						@delete="deletePortion"
						@update="updatePortion"
					/>
					<div class="flex justify-center w-100 py-6">
						<jet-button class="px-12" @click.native="addPortion(lunchIndex)" action="add">
							Lisää uusi annos
						</jet-button>
					</div>
				</div>
			</div>
			<div class="ml-12">
				<div class="mt-2 text-sm text-gray-500">blaablaa</div>
			</div>
		</div>
	</div>
</template>
<script>
import { format } from "date-fns";
import fi from "date-fns/locale/fi";
import { capitalizeFormattedDate, ISOStringToDate } from "@/Helpers/dateFunctions";
import JetButton from "@/Jetstream/Button";
import { axiosPost } from "@/Helpers/axios";
import { postRestaurantLunchApiUrl } from "@/Helpers/apiEndPoints";
import PortionIterator from "./PortionIterator";

export default {
	components: {
		JetButton,
		PortionIterator,
	},
	props: {
		data: { Type: Object },
	},
	data() {
		return {
			lunches: "",
			updateIndex: "",
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

		async updatePortion(lunchIndex) {
			const i = lunchIndex;
			let update = true;
			if (this.data[i].json && this.lunches[i].json) {
				const data = this.data[i].json;
				const lunches = this.lunches[i].json;
				if (JSON.stringify(data) === JSON.stringify(lunches)) {
					console.log(`🚔 Initial data loaded, no update [${i}].`);
					update = false;
				}
			}
			if (update) {
				const url = postRestaurantLunchApiUrl(this.lunches[i].date);
				const json = JSON.stringify(this.lunches[i]);
				const request = { url, json };
				const response = await axiosPost(request);
				if (response) {
					console.log(response);
				}
			}
		},
	},
	created() {
		this.updatePortion = window._.debounce(this.updatePortion, 3000);
	},
};
</script>
