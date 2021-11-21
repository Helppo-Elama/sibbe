<template>
	<div class="bg-gray-200 bg-opacity-25">
		<div class="p-4">
			<div v-for="(item, target) in items" :key="item + target">
				<div class="p-4 rounded-xl shadow-md">
					<div class="flex w-100 justify-end">
						<jet-button class="px-6 ml-3" @click.native="$emit('delete', target)" action="delete">
							Poista kategoria
						</jet-button>
					</div>
					<div
						class="pb-6 grid grid-cols-2 md:grid-cols-3 gap-4 place-content-evenly"
						@change="updateType(target)"
					>
						<Icons :icon="item.icon" :target="target" @change="updateIcon" />
						<div>
							<text-input v-model="item.type"> Kategoria</text-input>
						</div>
					</div>
					<div class="">
						<hr class="my-4" />
					</div>
					<MenuItems
						:data="item.json"
						:target="target"
						@delete="deleteItem"
						@change="updateItem"
						:key="componentKey"
					/>
					<div class="flex justify-center w-100 py-6">
						<jet-button class="px-12" @click.native="addItem(target)" action="add">
							Lisää uusi annos
						</jet-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import JetButton from "@/Jetstream/Button"

import TextInput from "@/Components/Common/InputText"

import { axiosPost, axiosDelete } from "@/Helpers/js/axios"
import { buildUrl } from "@/Helpers/js/apiEndPoints"

import MenuItems from "./MenuItems"
import Icons from "./Icons"

export default {
	components: {
		JetButton,
		TextInput,
		Icons,
		MenuItems
	},
	props: {
		data: { Type: Object },
		type: { Type: String }
	},
	data() {
		return {
			items: undefined,
			componentKey: 0
		}
	},
	computed: {
		url() {
			let result = false
			if (this.type === "cafe") {
				result = {
					item: buildUrl("cafe/post"),
					delete: buildUrl("cafe/delete"),
					data: buildUrl("cafe/data/post"),
					type: buildUrl("cafe/type/post")
				}
			} else if (this.type === "restaurant") {
				result = {
					item: buildUrl("restaurant/menu/post"),
					delete: buildUrl("restaurant/menu/delete"),
					data: buildUrl("restaurant/data/post"),
					type: buildUrl("restaurant/menu/type/post")
				}
			}
			return result
		}
	},
	watch: {
		data: {
			deep: true,
			immediate: true,
			handler() {
				this.items = window._.cloneDeep(this.data)
			}
		}
	},

	methods: {
		async deleteItem({ target, i }) {
			this.items[target].json.splice(i, 1)
			const json = window._.pick(this.items[target], ["id", "json"])
			const url = this.url.delete
			const response = await axiosDelete({ url, json })
			if (response) {
				this.$message.warn(response.message)
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe")
			this.forceRerender()
		},
		addItem(target) {
			const i = target
			const clone = window._.cloneDeep(this.items[i].json)
			console.log("hep")
			const portions = Array.isArray(clone) ? clone : []
			portions.push({
				title: "",
				body: "",
				ingredients: "",
				allergenic: "",
				price: "",
				price_additional: ""
			})
			this.$set(this.items[i], "json", portions)
			console.log(portions.length)
			this.updateItem({ target, portions })
		},
		async updateItem({ target, portions }) {
			const i = target
			if (this.items.length === 0 && portions.length === 0) return
			if (window._.isEqual(this.data[i], this.items[i])) return
			this.items[i].json = portions
			const json = JSON.stringify(this.items[i])
			const url = this.url.item
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response.message)
				this.$emit("update-items", { i, portions })
			} else this.$message.error("Annoksen tallentamisessa tapahtui virhe")
		},
		async updateType(i) {
			const data = window._.pick(this.items[i], ["type", "icon", "id"])
			this.$emit("change", { data, i })
		},
		updateIcon({ name, target }) {
			this.items[target].icon = name
			this.updateType(target)
		},
		forceRerender() {
			this.componentKey += 1
		}
	},
	created() {
		this.updateType = window._.debounce(this.updateType, 500)
		this.updateItem = window._.debounce(this.updateItem, 500)
	}
}
</script>
