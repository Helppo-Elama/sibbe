<template>
	<div
		v-if="!disabled"
		class="flex cursor-pointer"
		:class="{ 'justify-center': center }"
		@click="proxyChecked = !proxyChecked"
	>
		<div
			class="w-8 h-5 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
			:class="{ 'bg-red-600': proxyChecked, 'bg-green-600': !proxyChecked }"
		>
			<div
				class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
				:class="{ 'translate-x-2': proxyChecked }"
			></div>
		</div>
		<span
			class="mx-2"
			:class="{ 'text-red-500 line-through': proxyChecked, 'text-green-600': !proxyChecked }"
			><slot></slot
		></span>
	</div>
	<div v-else class="flex tooltip relative cursor-not-allowed">
		<span
			class="
				tooltip-text
				bg-red-100
				text-center
				rounded-full
				px-3
				transition
				duration-500
				ease-in-out
			"
			>Pois päältä. Viimeistele ensin nykyiset valinnat...</span
		>
		<div
			class="w-8 h-5 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
			:class="{ 'bg-red-600': proxyChecked, 'bg-green-600': !proxyChecked }"
		>
			<div
				class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
				:class="{ 'translate-x-2': proxyChecked, 'text-green-600': !proxyChecked }"
			></div>
		</div>
		<span
			class="ml-2"
			:class="{ 'text-red-500 line-through': proxyChecked, 'text-green-600': !proxyChecked }"
			><slot></slot
		></span>
	</div>
</template>

<script>
export default {
	props: {
		disabled: { type: Boolean, default: false },
		checked: {
			type: Boolean,
			default: false
		},
		center: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			proxyChecked: this.checked
		}
	},
	watch: {
		proxyChecked(val) {
			/*
			const el = this.$refs.switchLabel
			if (!this.inverted) {
				if (val === true) {
					el.classList.add("text-red-500")
					el.classList.add("line-through")
				} else {
					el.classList.remove("text-red-500")
					el.classList.remove("line-through")
				}
			} else if (val === true) {
				el.classList.remove("text-green-600")
				el.classList.remove("line-through")
			} else {
				el.classList.add("text-green-600")
				el.classList.add("line-through")
			}
			*/
			this.$emit("change", val)
		}
	}
}
</script>
<style scoped>
.tooltip-text {
	visibility: hidden;
	opacity: 0;
	left: 37px;
	top: -1px;
	position: absolute;
	z-index: 1;
}

.tooltip:hover .tooltip-text {
	visibility: visible;
	opacity: 1;
}
</style>
