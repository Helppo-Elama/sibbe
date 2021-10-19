<template>
	<div class="relative">
		<span class="pt-4 pb-1 pl-1 text-gray-700 block">Lounaan tyyppi</span>
		<jet-dropdown align="left" class="mt-1">
			<template #trigger>
				<button
					type="button"
					class="
						inline-flex
						justify-between
						w-full
						rounded-md
						border border-gray-300
						shadow-sm
						px-4
						py-2
						bg-white
						mt-1
						rounded-md
						border-gray-300
						shadow-sm
						focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
					"
				>
					<slot></slot>
					<TypeTranslate :text="type" />
					<JetDropdownSVG />
				</button>
			</template>
			<template #content>
				<jet-dropdown-item @clicked="updateType(null, target)"> (tyhjä) </jet-dropdown-item>
				<jet-dropdown-item @clicked="updateType('lunch', target)"> Lounas </jet-dropdown-item>
				<jet-dropdown-item @clicked="updateType('brunch', target)"> Brunssi </jet-dropdown-item>
				<div class="border-t border-gray-100"></div>
			</template>
		</jet-dropdown>
	</div>
</template>

<script>
import JetDropdown from "@/Jetstream/Dropdown"
import JetDropdownItem from "@/Jetstream/DropdownItem"
import JetDropdownSVG from "@/Jetstream/DropDownSVG"
import TypeTranslate from "./TypeTranslate"

export default {
	components: {
		JetDropdown,
		JetDropdownItem,
		JetDropdownSVG,
		TypeTranslate
	},
	props: {
		target: {
			default: undefined,
			type: Number
		},
		type: {
			type: String
		}
	},
	methods: {
		updateType(type, target) {
			if (target === undefined) this.$emit("change", type)
			else this.$emit("change", { type, target })
		}
	}
}
</script>

<style></style>
