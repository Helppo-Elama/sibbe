<template>
	<div class="bg-gray-200 bg-opacity-25">
		<div class="p-4">
			<div v-for="(item, index) in items" :key="item + index">
				<div class="p-4 rounded-xl shadow-md">
					<div class="flex w-100 justify-end">
						<jet-button class="px-6 ml-3" @click.native="$emit('delete', index)" action="delete">
							Poista kategoria
						</jet-button>
					</div>
					<div
						class="pb-6 grid grid-cols-2 md:grid-cols-3 gap-4 place-content-evenly"
						@change="updateType(index)"
					>
						<Icons :icon="item.icon" :index="index" @change="updateIcon" />
						<div>
							<label>
								<span class="pt-4 pb-1 pl-1 text-gray-700 text-2xl block">Kategoria</span>
								<input
									type="text"
									class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
						:type="item.type"
						:index="index"
						@delete="deleteItem"
						@change="updateItem"
					/>
					<div class="flex justify-center w-100 py-6">
						<jet-button class="px-12" @click.native="addItem(index)" action="add">
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
	postCafeItemApiUrl,
	postCafeTypeApiUrl,
	// postCafeDataApiUrl
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
	},
	data() {
		return {
			items: "",
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
		deleteItem({ index, i }) {
			const item = this.items[index].json;
			item.splice(i, 1);
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
		},
		async updateItem(i) {
			let update = true;
			const json = JSON.stringify(this.items[i]);
			if (JSON.stringify(this.data[i]) === json) {
				update = false;
			}
			if (update) {
				const url = postCafeItemApiUrl();
				const response = await axiosPost({ url, json });
				if (response) {
					this.$message.success(response);
				} else this.$message.error("Annoksen tallentamisessa tapahtui virhe");
			}
		},
		async updateType(i) {
			const data = window._.omit(this.items[i], ["created_at", "json", "updated_at"]);
			const url = postCafeTypeApiUrl();
			const json = JSON.stringify(data);
			const response = await axiosPost({ url, json });
			if (response) {
				this.$message.success(response);
			} else this.$message.error("Tietojen tallentamisessa tapahtui virhe");
		},
		updateIcon({ name, index }) {
			console.log(this.items);
			console.log(name);
			console.log(index);
			this.items[index].icon = name;
			this.updateType(index);
		},
	},
	created() {
		this.updateType = window._.debounce(this.updateType, 1000);
		this.updateItem = window._.debounce(this.updateItem, 1000);
	},
};
</script>
