<template>
	<div
		class="rounded-md block py-2 text-gray-600 m-0.5 w-full border rounded-md border-gray-300 shadow-sm"
	>
		{{ translated }}
	</div>
</template>
<script>
export default {
	props: { text: { type: String } },
	computed: {
		translated: {
			get() {
				if (this.text === "lunch") {
					return "Lounas";
				}
				if (this.text === "brunch") {
					return "Brunssi";
				}
				return "Ei valittu";
			},
			set(val) {
				if (val === "lunch") {
					return "Lounas";
				}
				if (val === "brunch") {
					return "Brunssi";
				}
				return "Ei valittu";
			},
		},
	},
};
</script>
