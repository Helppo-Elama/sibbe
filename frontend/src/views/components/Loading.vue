<template>
	<div class="loading d-inline-flex">
		{{ loading }}
		<div class="three-dots d-inline-flex">{{ threeDots }}</div>
	</div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "Loading",
	data: function () {
		return {
			// declare message with an empty value
			loading: "Haetaan tietoja",
			threeDots: "",
		};
	},
	mounted(): void {
		setInterval(
			() => {
				if (this.threeDots.length < 3) {
					this.threeDots += ".";
				} else this.threeDots = "";
			},
			500,
			this
		);
	},
});
</script>

<style lang="scss">
.three-dots {
	animation: blink 1s linear infinite;
	min-width: 50px;
}
@keyframes blink {
	50% {
		opacity: 0;
	}
}
</style>
