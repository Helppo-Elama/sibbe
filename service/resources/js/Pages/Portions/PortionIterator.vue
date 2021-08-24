<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 pt-6 px-3">
		<div v-for="(portion, i) in data" :key="portion + i">
			<div class="mr-4">
				<div class="flex justify-between pb-3 text-2xl text-gray-700">
					<div class="break-all">{{ i + 1 }}. {{ portion.title }}</div>
					<div>
						<jet-button
							class="px-6 ml-3"
							@click.native="$emit('delete', { target, i })"
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
						:value="portion.title"
						@change="
							portion.title = $event.target.value;
							updateHandler(i);
						"
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
						:value="portion.body"
						@change="
							portion.body = $event.target.value;
							updateHandler(i);
						"
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
						:value="portion.ingredients"
						@change="
							portion.ingredients = $event.target.value;
							updateHandler(i);
						"
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
							:value="portion.price"
							@change="
								portion.price = $event.target.value;
								updateHandler(i);
							"
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
						:value="portion.allergenic"
						@change="
							portion.allergenic = $event.target.value;
							updateHandler(i);
						"
					/>
				</label>
			</div>
		</div>
	</div>
</template>
<script>
import JetButton from "@/Jetstream/Button";

export default {
	components: {
		JetButton,
	},
	props: {
		data: {
			type: Object,
			required: true,
		},
		target: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			emitTarget: undefined,
		};
	},
	watch: {
		target: {
			handler() {
				this.emitTarget = this.target;
			},
		},
	},
	methods: {
		updateHandler(i) {
			const { target } = this;
			this.$emit("change", { target, i });
		},
	},
	created() {
		this.updateHandler = window._.debounce(this.updateHandler, 2000);
	},
};
</script>
