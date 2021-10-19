<template>
	<div class="hidden md:block max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex">
				<!-- Logo -->
				<div class="flex-shrink-0 flex items-center">
					<inertia-link :href="route('dashboard')">
						<jet-application-mark class="block h-9 w-auto" />
					</inertia-link>
				</div>

				<!-- Navigation Links -->
				<div class="hidden space-x-8 md:-my-px md:ml-10 md:flex">
					<jet-nav-link :href="route('dashboard')" :active="route().current('dashboard')">
						Hallintapaneeli
					</jet-nav-link>
				</div>

				<div class="hidden md:flex md:items-center md:ml-6">
					<DesktopMenuDropDown :data="restaurant" />
				</div>
				<div class="hidden space-x-8 md:-my-px md:flex md:ml-6">
					<jet-nav-link :href="route('cafe')" :active="route().current('cafe')">
						Kahvila
					</jet-nav-link>
				</div>
				<div class="hidden space-x-8 md:-my-px md:flex md:ml-6">
					<jet-nav-link :href="route('servicehours')" :active="route().current('servicehours')">
						Aukioloajat
					</jet-nav-link>
				</div>
				<div class="hidden space-x-8 md:-my-px md:flex md:ml-6">
					<jet-nav-link :href="route('portions')" :active="route().current('portions')">
						Annospohjat
					</jet-nav-link>
				</div>
			</div>

			<div class="hidden md:flex md:items-center md:ml-6">
				<!-- Settings Dropdown -->
				<div class="ml-3 relative">
					<jet-dropdown align="right" width="48">
						<template #trigger>
							<span class="inline-flex rounded-md">
								<button
									type="button"
									class="
										inline-flex
										items-center
										border border-transparent
										text-sm
										leading-4
										font-medium
										rounded-md
										text-gray-500
										bg-white
										hover:text-gray-700
										focus:outline-none
										transition
										ease-in-out
										duration-150
									"
								>
									{{ $page.props.user.name }}

									<JetDropdownSVG />
								</button>
							</span>
						</template>

						<template #content>
							<!-- Account Management -->
							<div class="block px-4 py-2 text-xs text-gray-400">Hallinnoi tiliä</div>

							<jet-dropdown-link :href="route('profile.show')"> Profiili </jet-dropdown-link>

							<jet-dropdown-link
								v-if="$page.props.jetstream.hasApiFeatures"
								:href="route('api-tokens.index')"
							>
								API avaimet
							</jet-dropdown-link>

							<div class="border-t border-gray-100"></div>

							<!-- Authentication -->
							<form @submit.prevent="logout">
								<jet-dropdown-link role="button"> Kirjaudu ulos </jet-dropdown-link>
							</form>
						</template>
					</jet-dropdown>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Link as InertiaLink } from "@inertiajs/inertia-vue"
import JetApplicationMark from "@/Jetstream/ApplicationMark"
import DesktopMenuDropDown from "./Components/DesktopMenuDropDown.vue"
import JetDropdown from "@/Jetstream/Dropdown"
import JetDropdownLink from "@/Jetstream/DropdownLink"
import JetDropdownSVG from "@/Jetstream/DropDownSVG"
import JetNavLink from "@/Jetstream/NavLink"

export default {
	components: {
		JetApplicationMark,
		DesktopMenuDropDown,
		JetDropdown,
		JetDropdownLink,
		JetDropdownSVG,
		JetNavLink,
		InertiaLink
	},
	props: {
		userName: { type: String }
	},
	data() {
		return {
			showingNavigationDropdown: false,
			restaurant: {
				title: "Ravintola",
				items: [
					{
						title: "Lounas",
						route: "restaurant.lunch"
					},
					{
						title: "Menu",
						route: "restaurant.menu"
					},
					{
						title: "Tapahtumat",
						route: "restaurant.events"
					},
					{
						title: "Muut asiat",
						route: "restaurant.data"
					}
				]
			}
		}
	},
	methods: {
		logout() {
			// eslint-disable-next-line no-undef
			this.$inertia.post(route("logout"))
		}
	}
}
</script>
