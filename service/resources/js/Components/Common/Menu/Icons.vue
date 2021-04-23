<template>
	<div class="flex items-center justify-between">
		<jet-dropdown align="left" width="48" class="pb-1 pl-1">
			<template #trigger>
				<span class="inline-flex rounded-md">
					<button
						type="button"
						class="inline-flex text-2xl items-center border border-transparent rounded-md hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
					>
						Valitse kuvake
						<JetDropdownSVG />
					</button>
				</span>
			</template>
			<template #content>
				<jet-dropdown-item v-for="icon in icons" :key="icon.text">
					<div @click="emit(icon, index)">
						<div v-if="icon.icon === null" class="flex">
							<div class="w-8 mr-3"><br /></div>
							<div>
								{{ icon.text }}
							</div>
						</div>
						<div v-else class="flex flex-auto items-center">
							<svg
								class="mr-3"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								focusable="false"
								width="2em"
								height="2em"
								viewBox="0 0 24 24"
							>
								<path :d="icon.icon" fill="#626262" />
							</svg>
							{{ icon.text }}
						</div>
					</div>
				</jet-dropdown-item>
				<div class="border-t border-gray-100"></div>
			</template>
		</jet-dropdown>
		<div class="mr-3 pt-14">
			<svg
				v-if="getIconSVG()"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				focusable="false"
				width="2em"
				height="2em"
				viewBox="0 0 24 24"
			>
				<path :d="getIconSVG()" fill="#626262" />
			</svg>
		</div>
	</div>
</template>
<script>
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownItem from "@/Jetstream/DropdownItem";
import JetDropdownSVG from "@/Jetstream/DropDownSVG";

import {
	mdiHamburger,
	mdiFoodCroissant,
	mdiFoodForkDrink,
	mdiIceCream,
	mdiCoffeeOutline,
	mdiCandycane,
	mdiGlassFlute,
	mdiSilverwareForkKnife,
	mdiGlassMugVariant,
	mdiCupcake,
	mdiBeerOutline,
} from "@mdi/js";

export default {
	props: { icon: { type: String }, index: { type: Number } },
	components: {
		JetDropdown,
		JetDropdownItem,
		JetDropdownSVG,
	},
	data() {
		return {
			icons: [
				{
					text: "Ei kuvaa",
					name: "null",
					icon: null,
				},
				{
					text: "Hampurilainen",
					name: "mdiHamburger",
					icon: mdiHamburger,
				},
				{
					text: "Croissant",
					name: "mdiFoodCroissant",
					icon: mdiFoodCroissant,
				},
				{
					text: "Ruoka-annos",
					name: "mdiFoodForkDrink",
					icon: mdiFoodForkDrink,
				},
				{
					text: "Jäätelö",
					name: "mdiIceCream",
					icon: mdiIceCream,
				},
				{
					text: "Kahvi",
					name: "mdiCoffeeOutline",
					icon: mdiCoffeeOutline,
				},
				{
					text: "Karkki",
					name: "mdiCandycane",
					icon: mdiCandycane,
				},
				{
					text: "Viini",
					name: "mdiGlassFlute",
					icon: mdiGlassFlute,
				},
				{
					text: "Olut",
					name: " mdiGlassMugVariant",
					icon: mdiGlassMugVariant,
				},
				{
					text: "Ruoka",
					name: "mdiSilverwareForkKnife",
					icon: mdiSilverwareForkKnife,
				},
				{
					text: "Leivonnainen",
					name: "mdiCupcake",
					icon: mdiCupcake,
				},
				{
					text: "Juoma",
					name: "mdiBeerOutline",
					icon: mdiBeerOutline,
				},
			],
		};
	},
	methods: {
		getIconSVG() {
			const { icons, icon } = this;
			for (let i = 0; i < icons.length; i += 1) {
				if (icons[i].name === icon) {
					return icons[i].icon;
				}
			}
			return false;
		},
		emit(icon, index) {
			const { name } = icon;
			this.$emit("change", { name, index });
		},
	},
	mounted() {},
};
</script>
