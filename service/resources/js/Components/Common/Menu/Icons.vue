<template>
	<div class="relative">
		<span class="pt-4 pb-1 pl-1 text-gray-700 block">Valitse kuvake</span>
		<jet-dropdown align="left" width="48" class="mt-1">
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
						rounded-md
						border-gray-300
						shadow-sm
						focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
					"
				>
					<div class="inline-flex">
						<svg
							class="pr-3"
							v-if="selectedIcon.svg"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							focusable="false"
							height="1.6em"
							viewBox="0 0 24 24"
						>
							<path :d="selectedIcon.svg" fill="#626262" />
						</svg>
						{{ selectedIcon.text }}
					</div>
					<JetDropdownSVG />
				</button>
			</template>
			<template #content>
				<jet-dropdown-item v-for="icon in icons" :key="icon.text">
					<div @click="emitIcon(icon.name, target)">
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
	</div>
</template>
<script>
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
	mdiBeerOutline
} from "@mdi/js"
import JetDropdown from "@/Jetstream/Dropdown"
import JetDropdownItem from "@/Jetstream/DropdownItem"
import JetDropdownSVG from "@/Jetstream/DropDownSVG"

export default {
	props: { icon: { type: String }, target: { type: Number } },
	components: {
		JetDropdown,
		JetDropdownItem,
		JetDropdownSVG
	},
	data() {
		return {
			icons: {
				null: {
					text: "Ei kuvaa",
					icon: null,
					name: null
				},
				mdiHamburger: {
					text: "Hampurilainen",
					icon: mdiHamburger,
					name: "mdiHamburger"
				},
				mdiFoodCroissant: {
					text: "Croissant",
					icon: mdiFoodCroissant,
					name: "mdiFoodCroissant"
				},
				mdiFoodForkDrink: {
					text: "Ruoka-annos",
					icon: mdiFoodForkDrink,
					name: "mdiFoodForkDrink"
				},
				mdiIceCream: {
					text: "Jäätelö",
					icon: mdiIceCream,
					name: "mdiIceCream"
				},
				mdiCoffeeOutline: {
					text: "Kahvi",
					icon: mdiCoffeeOutline,
					name: "mdiCoffeeOutline"
				},
				mdiCandycane: {
					text: "Karkki",
					icon: mdiCandycane,
					name: "mdiCandycane"
				},
				mdiGlassFlute: {
					text: "Viini",
					icon: mdiGlassFlute,
					name: "mdiGlassFlute"
				},
				mdiGlassMugVariant: {
					text: "Olut",
					icon: mdiGlassMugVariant,
					name: "mdiGlassMugVariant"
				},
				mdiSilverwareForkKnife: {
					text: "Ruoka",
					icon: mdiSilverwareForkKnife,
					name: "mdiSilverwareForkKnife"
				},
				mdiCupcake: {
					text: "Leivonnainen",
					icon: mdiCupcake,
					name: "mdiCupcake"
				},

				mdiBeerOutline: {
					text: "Juoma",
					icon: mdiBeerOutline,
					name: "mdiBeerOutline"
				}
			},
			selectedIcon: {
				svg: undefined,
				text: undefined
			}
		}
	},
	watch: {
		icon: {
			immediate: true,
			handler() {
				const { icons, icon } = this
				if (!icon) {
					this.selectedIcon = icons.null
					return
				}
				const { icon: svg, text } = icons[icon]
				this.selectedIcon = { svg, text }
			}
		}
	},
	methods: {
		emitIcon(name, target) {
			this.$emit("change", { name, target })
		}
	}
}
</script>
