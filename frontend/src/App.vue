<template>
	<v-app class="green-on-light">
		<Nav />
		<v-main>
			<v-container fluid class="pa-0 ma-0">
				<transition name="fade">
					<router-view> </router-view>
				</transition>
			</v-container>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from "vue"
import Nav from "@c/Nav.vue"
import update from "@mix/serviceWorkerUpdate"

export default Vue.extend({
	name: "App",
	components: { Nav },
	mixins: [update],
	mounted(): void {
		console.log("👏 App mounted")
	}
})
</script>
<style lang="scss">
@media #{map-get($display-breakpoints, 'md-and-down')} {
	.v-main {
		padding-top: 0 !important;
	}
}

@media #{map-get($display-breakpoints, 'lg-and-up')} {
	.v-main {
		padding-top: 0 !important;
	}
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
