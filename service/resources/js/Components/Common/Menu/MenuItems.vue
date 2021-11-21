<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 px-2">
		<div v-for="(item, i) in portions" :key="item + i">
			<div class="mr-4">
				<div class="pb-3 text-2xl text-gray-700">
					<div class="break-all">{{ i + 1 }}. {{ item.title }}</div>
					<div class="flex justify-end">
						<jet-button class="px-6 ml-3" @click.native="searchHandler(i)" action="search">
							Hae
						</jet-button>
						<jet-button class="px-6 ml-3" @click.native="deleteHandler(target, i)" action="delete">
							Poista
						</jet-button>
					</div>
				</div>
				<text-input v-model="item.title">Nimike</text-input>
				<text-area v-model="item.body">Tarkempi kuvaus</text-area>
				<text-input v-model="item.ingredients">Ainesosat</text-input>
				<number-between-input
					:price="item.price"
					@price="item.price = $event"
					:priceAdditional="item.price_additional"
					@priceAdditional="item.price_additional = $event"
					>Hinta</number-between-input
				>
				<text-input v-model="item.allergenic">Allergeniatiedot</text-input>
			</div>
		</div>
		<Search :show="searchModal" @select="searchResult" @close="searchModal = false" />
	</div>
</template>
<script>
import JetButton from "@/Jetstream/Button"
import Search from "./PortionSearch"
import TextInput from "@/Components/Common/InputText"
import TextArea from "@/Components/Common/TextArea"
import NumberBetweenInput from "@/Components/Common/InputNumberBetween"

export default {
	components: {
		JetButton,
		Search,
		TextInput,
		TextArea,
		NumberBetweenInput
	},
	props: {
		data: {
			Type: Array
		},
		date: {
			Type: String
		},
		target: { Type: Number }
	},
	data() {
		return {
			searchModal: false,
			searchIndex: undefined,
			portions: [],
			noUpdateFlag: false
		}
	},
	watch: {
		data: {
			deep: true,
			immediate: true,
			handler() {
				const data = window._.cloneDeep(this.data)
				const portions = window._.cloneDeep(this.portions)
				if (data !== portions) {
					this.portions = this.data
				}
			}
		},
		portions: {
			deep: true,
			handler() {
				this.changeHandler()
			}
		}
	},
	methods: {
		changeHandler() {
			const { target, portions } = this
			this.$emit("change", { target, portions })
		},
		deleteHandler(target, i) {
			this.$emit("delete", { target, i })
		},
		searchHandler(i) {
			this.searchIndex = i
			this.searchModal = true
		},
		searchResult(result) {
			this.searchModal = false
			if (typeof this.searchIndex === "number" && this.searchIndex >= 0) {
				this.$set(this.portions[this.searchIndex], "title", result.title)
				this.$set(this.portions[this.searchIndex], "body", result.body)
				this.$set(this.portions[this.searchIndex], "allergenic", result.allergenic)
				this.$set(this.portions[this.searchIndex], "ingredients", result.ingredients)
				this.$set(this.portions[this.searchIndex], "price", result.price)
				this.$set(this.portions[this.searchIndex], "price_additional", result.price_additional)
			} else this.$message.error("Annoksen lisääminen epäonnistui")
			this.searchModal = false
		}
	},
	created() {
		this.emitHandler = window._.debounce(this.changeHandler, 1000)
	}
}
</script>
