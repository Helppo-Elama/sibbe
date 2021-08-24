<template>
	<hr class="mb-4" data-content="♡" :class="classList" />
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: {
		classList: {
			type: String,
			default() {
				return undefined
			}
		}
	},
	mounted(): void {
		console.log("🤭 Horizontal line mounted!")
	}
})
</script>

<style lang="scss" scoped>
hr.dark-on-yellow {
	line-height: 1em;
	position: relative;
	outline: 0;
	border: 0;
	color: $color1;
	text-align: center;
	height: 1.5em;
	&:before {
		content: "";
		background: linear-gradient(to right, transparent, $color1, transparent);
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
	}
	&:after {
		content: attr(data-content);
		position: relative;
		display: inline-block;
		color: $color1;

		padding: 0 0.5em;
		line-height: 1.5em;
		color: $color1;
		background-color: $color4;
	}
}
hr.light-on-green {
	line-height: 1em;
	position: relative;
	outline: 0;
	border: 0;
	color: $color5;
	text-align: center;
	height: 1.5em;
	&:before {
		content: "";
		background: linear-gradient(to right, transparent, $color5, transparent);
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
	}
	&:after {
		content: attr(data-content);
		position: relative;
		display: inline-block;
		color: $color5;

		padding: 0 0.5em;
		line-height: 1.5em;
		color: $color5;
		background-color: $color3;
	}
}
hr.light-on-red {
	line-height: 1em;
	position: relative;
	outline: 0;
	border: 0;
	color: $color5;
	text-align: center;
	height: 1.5em;
	&:before {
		content: "";
		background: linear-gradient(to right, transparent, $color5, transparent);
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
	}
	&:after {
		content: attr(data-content);
		position: relative;
		display: inline-block;
		color: $color5;

		padding: 0 0.5em;
		line-height: 1.5em;
		color: $color5;
		background-color: $color2;
	}
}
</style>
