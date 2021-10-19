<template>
	<div class="md:hidden max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
		<div class="flex justify-between h-16 items-center">
			<!-- Logo -->
			<div>
				<inertia-link :href="route('dashboard')">
					<jet-application-mark class="block h-9 w-auto" />
				</inertia-link>
			</div>
			<!-- Hamburger -->
			<div class="-mr-2 flex items-center md:hidden">
				<button
					class="
						inline-flex
						items-center
						justify-center
						p-2
						rounded-md
						text-gray-400
						hover:text-gray-500 hover:bg-gray-100
						focus:outline-none focus:bg-gray-100 focus:text-gray-500
						transition
						duration-150
						ease-in-out
					"
					@click="showingNavigationDropdown = !showingNavigationDropdown"
				>
					<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path
							:class="{
								hidden: showingNavigationDropdown,
								'inline-flex': !showingNavigationDropdown
							}"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
						<path
							:class="{
								hidden: !showingNavigationDropdown,
								'inline-flex': showingNavigationDropdown
							}"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div
			:class="{
				block: showingNavigationDropdown,
				hidden: !showingNavigationDropdown
			}"
			class="md:hidden"
		>
			<div class="pt-2 pb-3 space-y-1">
				<jet-responsive-nav-link :href="route('dashboard')" :active="route().current('dashboard')">
					Hallintapaneeli
				</jet-responsive-nav-link>
				<div
					class="
						inline-flex
						items-center
						pl-3
						pr-4
						py-2
						border-l-4 border-transparent
						text-base
						font-medium
					"
				>
					Ravintola
					<JetDropdownSVG />
				</div>
				<div class="pl-3">
					<jet-responsive-nav-link
						:href="route('restaurant.lunch')"
						:active="route().current('restaurant.lunch')"
					>
						Lounas
					</jet-responsive-nav-link>
					<jet-responsive-nav-link
						:href="route('restaurant.menu')"
						:active="route().current('restaurant.menu')"
					>
						Menu
					</jet-responsive-nav-link>
					<jet-responsive-nav-link
						:href="route('restaurant.data')"
						:active="route().current('restaurant.data')"
					>
						Muut asiat
					</jet-responsive-nav-link>
				</div>
				<jet-responsive-nav-link :href="route('cafe')" :active="route().current('cafe')">
					Kahvila
				</jet-responsive-nav-link>
				<jet-responsive-nav-link
					:href="route('servicehours')"
					:active="route().current('servicehours')"
				>
					Aukioloajat
				</jet-responsive-nav-link>
				<jet-responsive-nav-link :href="route('portions')" :active="route().current('portions')">
					Annospohjat
				</jet-responsive-nav-link>
			</div>

			<!-- Responsive Settings Options -->
			<div class="pt-4 pb-1 border-t border-gray-200">
				<div class="flex items-center px-4">
					<div v-if="$page.props.jetstream.managesProfilePhotos" class="flex-shrink-0 mr-3">
						<img
							class="h-10 w-10 rounded-full object-cover"
							:src="$page.props.user.profile_photo_url"
							:alt="$page.props.user.name"
						/>
					</div>

					<div>
						<div class="font-medium text-base text-gray-800">
							{{ $page.props.user.name }}
						</div>
						<div class="font-medium text-sm text-gray-500">
							{{ $page.props.user.email }}
						</div>
					</div>
				</div>

				<div class="mt-3 space-y-1">
					<jet-responsive-nav-link
						:href="route('profile.show')"
						:active="route().current('profile.show')"
					>
						Profiili
					</jet-responsive-nav-link>

					<jet-responsive-nav-link
						v-if="$page.props.jetstream.hasApiFeatures"
						:href="route('api-tokens.index')"
						:active="route().current('api-tokens.index')"
					>
						API Avaimet
					</jet-responsive-nav-link>

					<!-- Authentication -->
					<form method="POST" @submit.prevent="logout">
						<jet-responsive-nav-link role="button"> Kirjaudu ulos </jet-responsive-nav-link>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Link as InertiaLink } from "@inertiajs/inertia-vue"
import JetApplicationMark from "@/Jetstream/ApplicationMark"
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink"
import JetDropdownSVG from "@/Jetstream/DropDownSVG"

export default {
	components: {
		JetApplicationMark,
		JetResponsiveNavLink,
		JetDropdownSVG,

		InertiaLink
	},

	data() {
		return {
			showingNavigationDropdown: false
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
