<template>
	<app-layout>
		<template #header>
			<h2 class="font-semibold text-xl text-gray-800 text-2xl text-center">
				Ravintolan ruoka/juomalista
			</h2>
		</template>
		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="bg-white shadow-xl sm:rounded-lg pb-6">
					<div class="pt-2 px-2">
						<div class="mt-3 py-6 text-grey-600 text-2xl text-center bg-gray-300 bg-gray-300">
							Valikoima
						</div>
					</div>
					<MenuIterator
						:data="menu"
						:type="'restaurant'"
						@delete="deleteType"
						@change="updateType"
						@update-items="updateItems"
						:key="componentKey"
					/>
					<div class="flex justify-center w-100 py-6">
						<jet-button class="px-24" @click.native="addType()" action="add">
							Lisää uusi kategoria
						</jet-button>
					</div>
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout"
import JetButton from "@/Jetstream/Button"
import { axiosPost, axiosDelete } from "@/Helpers/js/axios"
import { buildUrl } from "@/Helpers/js/apiEndPoints"
import MenuIterator from "@/Components/Common/Menu/MenuIterator"

export default {
	components: {
		AppLayout,
		MenuIterator,
		JetButton
	},
	props: {
		data: { type: Array, required: true }
	},
	data() {
		return {
			componentKey: 0
		}
	},
	computed: {
		menu: {
			set(val) {
				return val
			},
			get() {
				let result
				if (this.data) {
					result = this.data
				} else {
					result = [{ type: "", icon: "", json: "", id: null }]
				}
				return result
			}
		}
	},
	methods: {
		refreshComponent() {
			this.componentKey += 1
		},
		updateItems({ i, portions }) {
			this.menu[i].json = portions
		},
		async addType() {
			const item = { type: "", icon: "", json: "", id: null }
			const i = this.menu.push(item) - 1
			const json = JSON.stringify(item)
			const url = buildUrl("restaurant/menu/type/post")
			const request = { url, json }
			const response = await axiosPost(request)
			if (response) {
				this.$message.success(response.message)
				this.menu[i].id = response.id
			} else this.$message.error("Kategorian tallentamisessa tapahtui virhe")
		},
		async deleteType(i) {
			const { id } = this.menu[i]
			const url = buildUrl("restaurant/menu/type/delete")
			const request = { url, id }
			const response = await axiosDelete(request)
			if (response) {
				this.$message.success(response.message)
				this.menu.splice(i, 1)
				this.$nextTick(() => this.refreshComponent())
			} else this.$message.error("Kategorian poistossa tapahtui virhe")
		},
		async updateType({ data, i }) {
			const url = buildUrl("restaurant/menu/type/post")
			const json = JSON.stringify(data)
			const response = await axiosPost({ url, json })
			if (response) {
				this.$message.success(response.message)
				this.menu[i] = data
			} else this.$message.error("Tietojen tallentamisessa tapahtui virhe")
		}
	}
}
</script>
