<template>
	<app-layout>
		<template #header>
			<h2 class="font-semibold text-xl text-gray-800 text-2xl text-center">
				Ravintolan tapahtumat
			</h2>
		</template>
		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="bg-white shadow-xl sm:rounded-lg"></div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout"

export default {
	components: {
		AppLayout
	},
	data() {
		return {}
	},
	mounted() {}
}
</script>
