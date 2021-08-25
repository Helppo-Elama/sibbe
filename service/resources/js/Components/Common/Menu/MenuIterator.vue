<template>
	<div class="bg-gray-200 bg-opacity-25">
		<div class="p-4">
			<div v-for="(item, category) in items" :key="item + category">
				<div class="p-4 rounded-xl shadow-md">
					<div class="flex w-100 justify-end">
						<jet-button class="px-6 ml-3" @click.native="$emit('delete', category)" action="delete">
							Poista kategoria
						</jet-button>
					</div>
					<div
						class="pb-6 grid grid-cols-2 md:grid-cols-3 gap-4 place-content-evenly"
						@change="updateType(category)"
					>
						<Icons :icon="item.icon" :category="category" @change="updateIcon" />
						<div>
							<label>
								<span class="pt-4 pb-1 pl-1 text-gray-700 text-2xl block">Kategoria</span>
								<input
									type="text"
									class="
										block
										mt-1
										w-full
										rounded-md
										border-gray-300
										shadow-sm
										focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
									"
									:value="item.type"
									@change="item.type = $event.target.value"
								/>
							</label>
						</div>
					</div>
					<div class="">
						<hr class="my-4" />
					</div>
					<MenuItemIterator
						:data="item.json"
						:category="category"
						@delete="deleteItem"
						@change="updateItem"
						:key="componentKey"
					/>
					<div class="flex justify-center w-100 py-6">
						<jet-button class="px-12" @click.native="addItem(category)" action="add">
							Lisää uusi annos
						</jet-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import JetButton from "@/Jetstream/Button";

import { axiosPost } from "@/Helpers/axios";
import {
	postRestaurantItemApiUrl,
	deleteRestaurantItemApiUrl,
	postRestaurantTypeApiUrl,
	// postRestaurantDataApiUrl
	postCafeItemApiUrl,
	deleteCafeItemApiUrl,
	postCafeTypeApiUrl,
	// postCafeDataApiUrl,
} from "@/Helpers/apiEndPoints";

import MenuItemIterator from "./MenuItemIterator";
import Icons from "./Icons";

export default {
	components: {
		JetButton,
		Icons,
		MenuItemIterator,
	},
	props: {
		data: { Type: Object },
		type: { Type: String },
	},
	data() {
		return {
			items: undefined,
			componentKey: 0,
		};
	},
	computed: {
		url() {
			let result = false;
			if (this.type === "cafe") {
				result = {
					item: postCafeItemApiUrl(),
					delete: deleteCafeItemApiUrl(),
					type: postCafeTypeApiUrl(),
					// data: postCafeDataApiUrl,
				};
			} else if (this.type === "restaurant") {
				result = {
					item: postRestaurantItemApiUrl(),
					delete: deleteRestaurantItemApiUrl(),
					type: postRestaurantTypeApiUrl(),
					// data: postCafeDataApiUrl,
				};
			}
			return result;
		},
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
		async deleteItem({ category, i }) {
			this.items[category].json.splice(i, 1);
			const json = window._.pick(this.items[category], ["type", "json"]);
			const url = this.url.delete;
			const response = await axiosPost({ url, json });
			if (response) {
				this.$message.warn(response);
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe");
			this.forceRerender();
		},
		addItem(category) {
			const i = category;
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
			this.updateItem({ category, undefined });
			this.forceRerender();
		},
		async updateItem({ category, portions }) {
			const i = category;
			if (portions) this.items[i].json = portions;
			const json = JSON.stringify(this.items[i]);
			const url = this.url.item;
			const response = await axiosPost({ url, json });
			if (response) {
				this.$message.success(response);
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe");
		},
		async updateType(i) {
			const data = window._.pick(this.items[i], ["type", "icon", "id"]);
			const url = this.url.type;
			const json = JSON.stringify(data);
			const response = await axiosPost({ url, json });
			if (response) {
				this.$message.success(response);
			} else this.$message.error("Tietojen tallentamisessa tapahtui virhe");
		},
		updateIcon({ name, category }) {
			this.items[category].icon = name;
			this.updateType(category);
		},
		forceRerender() {
			this.componentKey += 1;
		},
	},
	created() {
		this.updateType = window._.debounce(this.updateType, 1000);
		this.updateItem = window._.debounce(this.updateItem, 1000);
	},
};
</script>
