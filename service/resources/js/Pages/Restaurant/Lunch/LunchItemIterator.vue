<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 frist:border-r-2 pt-6">
		<div v-for="(item, i) in portions" :key="item + i">
			<div class="mr-4">
				<div class="grid grid-cols-1 lg:grid-cols-2 pb-3 text-2xl text-gray-700">
					<div class="break-all">{{ i + 1 }}. {{ item.title }}</div>
					<div class="flex justify-end">
						<jet-button class="px-6 ml-3" @click.native="searchHandler(i)" action="search">
							Hae
						</jet-button>
						<jet-button
							class="px-6 ml-3"
							@click.native="deleteHandler(dateIndex, i)"
							action="delete"
						>
							Poista
						</jet-button>
					</div>
				</div>
				<label>
					<span class="pt-4 pb-1 pl-2 text-gray-700 block">Nimike</span>
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
						:value="item.title"
						@change="item.title = $event.target.value"
					/>
				</label>
				<label>
					<span class="pt-4 pb-1 pl-2 text-gray-700 block">Tarkempi kuvaus</span>
					<textarea
						class="
							block
							mt-1
							w-full
							h-16
							rounded-md
							border-gray-300
							shadow-sm
							focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
						"
						:value="item.body"
						@change="item.body = $event.target.value"
					/>
				</label>
				<label>
					<span class="pt-4 pb-1 pl-1 text-gray-700 block">Ainesosat</span>
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
						:value="item.ingredients"
						@change="item.ingredients = $event.target.value"
					/>
				</label>

				<label>
					<span class="pt-4 pb-1 pl-2 text-gray-700 block">Hinta</span>
					<div class="flex mt-1">
						<input
							type="number"
							step=".01"
							class="
								block
								rounded-md
								w-full
								border-gray-300
								shadow-sm
								focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
							"
							:value="item.price"
							@change="item.price = $event.target.value"
						/>
						<div class="pl-4 flex items-center">EUR</div>
					</div>
				</label>
				<label class="pb-3 block">
					<span class="pt-4 pb-1 pl-2 text-gray-700 block">Allergiatiedot</span>
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
						:value="item.allergenic"
						@change="item.allergenic = $event.target.value"
					/>
				</label>
			</div>
		</div>
		<Search :show="searchModal" @select="searchResult" @close="searchModal = false" />
	</div>
</template>
<script>
import JetButton from "@/Jetstream/Button";
import Search from "@/Components/Common/Menu/PortionSearch";

export default {
	components: {
		JetButton,
		Search,
	},
	props: {
		data: {
			Type: Object,
		},
		date: {
			Type: String,
		},
		dateIndex: { Type: Number },
	},
	data() {
		return {
			searchModal: false,
			searchIndex: undefined,
			portions: undefined,
		};
	},
	watch: {
		data: {
			deep: true,
			immediate: true,
			handler() {
				if (!this.portions) {
					this.portions = window._.cloneDeep(this.data);
				}
			},
		},
		portions: {
			deep: true,
			handler() {
				this.changeHandler();
			},
		},
	},
	methods: {
		changeHandler() {
			const { dateIndex, portions } = this;
			this.$emit("change", { dateIndex, portions });
		},
		deleteHandler(dateIndex, i) {
			this.$emit("delete", { dateIndex, i });
		},
		searchHandler(i) {
			this.searchIndex = i;
			this.searchModal = true;
		},
		searchResult(portion) {
			this.searchModal = false;
			if (typeof this.searchIndex === "number" && this.searchIndex >= 0) {
				this.portions[this.searchIndex] = window._.pick(portion, [
					"title",
					"body",
					"allergenic",
					"ingredients",
					"price",
				]);
				this.changeHandler();
			} else this.$message.warn("Annoksen lisääminen epäonnistui");
			this.searchModal = false;
		},
	},
	created() {
		this.changeHandler = window._.debounce(this.changeHandler, 2000);
	},
};
</script>
