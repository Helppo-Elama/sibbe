<template>
	<div class="header-image-container">
		<div v-if="$vuetify.breakpoint.mdAndDown">
			<picture>
				<source :srcSet="images.normal.webp.srcSet" type="image/webp" />
				<img
					class="header"
					:src="images.normal.img.src"
					:srcSet="images.normal.img.srcSet"
					:width="images.normal.img.width"
					:height="images.normal.img.height"
					:alt="images.normal.alt"
					loading="lazy"
				/>
			</picture>
		</div>
		<div v-else>
			<picture>
				<source :srcSet="images.cropped.webp.srcSet" type="image/webp" />
				<img
					class="header"
					:src="images.cropped.img.src"
					:srcSet="images.cropped.img.srcSet"
					:width="images.cropped.img.width"
					:height="images.cropped.img.height"
					:alt="images.cropped.alt"
					loading="lazy"
				/>
			</picture>
		</div>
		<div class="centered">
			<div class="museo header-museo">VILLA</div>
			<div class="bello header-bello">Sibbe</div>
		</div>
		<div v-if="images.author" class="color-light image-with-author">
			&copy;
			<a :href="images.author.url" rel="noopener noreferrer">{{ images.author.name }}</a>
		</div>
	</div>
</template>

<script lang="ts">
import { IImage } from "@d/interfaces/images.interface"
import Vue, { PropType } from "vue"

export default Vue.extend({
	name: "Header",
	props: {
		images: { type: Object as () => PropType<Record<string, IImage>>, required: true }
	},

	mounted() {
		console.log("👍 Header mounted!")
	}
})
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: auto;
	display: block;
}
.header-image-container {
	position: relative;
}
.centered {
	text-shadow: $color4 0px 0px 10px, $color4 0px 0px 20px, $color4 0px 0px 30px;
	position: absolute;
	top: 50%;
	left: 50%;
	color: $color5;
	transform: translate(-50%, -50%);
	display: flex;
}
.header-museo {
	padding-top: 0.8em;
	font-size: 8vw;
}
.header-bello {
	font-size: 20vw;
}

@media #{map-get($display-breakpoints, 'sm-only')} {
	.image-with-author {
		font-size: 2.2vw;
	}
}

@media #{map-get($display-breakpoints, 'xs-only')} {
	.image-with-author {
		font-size: 2.7vw;
	}
}
</style>
