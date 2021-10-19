<template>
	<div>
		<BreakPoints v-if="developerMode" />
		<jet-banner />
		<div class="min-h-screen bg-gray-100">
			<nav class="bg-white border-b border-gray-100">
				<!-- Primary Navigation Menu -->
				<MenuDesktop />
				<!-- Responsive Navigation Menu -->
				<MenuMobile />
			</nav>

			<!-- Page Heading -->
			<header v-if="$slots.header" class="bg-white shadow">
				<div class="max-w-7xl mx-auto py-6 px-4 md:px-6 lg:px-8">
					<slot name="header"></slot>
				</div>
			</header>

			<!-- Page Content -->
			<main>
				<slot></slot>
			</main>

			<!-- Modal Portal -->
			<portal-target name="modal" multiple> </portal-target>
		</div>
	</div>
</template>

<script>
import BreakPoints from "@/Helpers/Vue/Breakpoints.vue"
import JetBanner from "@/Jetstream/Banner"
import MenuDesktop from "./Menu/MenuDesktop.vue"
import MenuMobile from "./Menu/MenuMobile.vue"

export default {
	components: {
		BreakPoints,
		JetBanner,
		MenuDesktop,
		MenuMobile
	},

	data() {
		return {
			showingNavigationDropdown: false
		}
	},
	computed: {
		developerMode() {
			return process.env.NODE_ENV === "development"
		}
	}
}
</script>
