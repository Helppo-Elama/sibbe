<template>
	<label>
		<span class="pt-4 pb-1 pl-2 text-gray-700 block"><slot /></span>
		<textarea
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
			:rows="rows"
			:value="proxyValue"
			ref="textarea"
			@change="proxyValue = $event.target.value"
		/>
	</label>
</template>

<script>
export default {
	model: {
		prop: "value",
		event: "change"
	},
	props: {
		value: {
			type: String
		},
		rows: {
			type: Number,
			default: () => 3
		}
	},
	computed: {
		proxyValue: {
			get() {
				return this.value
			},
			set(val) {
				this.$emit("change", val)
			}
		}
	}
}
</script>
