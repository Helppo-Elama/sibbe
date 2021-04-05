<template>
	<div>
		<v-carousel
			v-resize:debounce="getCarouselHeight"
			hide-delimiter-background
			show-arrows-on-hover
			:prev-icon="mdiChevronLeft"
			:next-icon="mdiChevronRight"
			height=""
			:style="{ height: this.carouselHeight }"
		>
			<v-carousel-item eager v-for="image in images" :key="image.img.src">
				<picture>
					<source :srcSet="image.webp.srcSet" type="image/webp" />
					<img
						class="accommodation-carousel-image zoom-in"
						v-on:click="showDialog(image)"
						:ref="image.img.src"
						:data-v="image.img.src"
						:srcSet="image.img.srcSet"
						:width="image.img.width"
						:height="image.img.height"
						:alt="image.alt"
						loading="lazy"
					/>
				</picture>
			</v-carousel-item>
		</v-carousel>

		<v-dialog content-class="dialog-image" v-model="dialogVisible" fullscreen>
			<picture>
				<source :srcSet="dialogImage.webp.srcSet" type="image/webp" />
				<img
					:src="dialogImage.img.src"
					class="center"
					:srcSet="dialogImage.img.srcSet"
					:width="dialogImage.img.width"
					:height="dialogImage.img.height"
					:alt="dialogImage.alt"
					loading="lazy"
				/>
			</picture>
			<v-btn
				class="mx-2 dialog-image-close light-on-dark font-weight-bold"
				fab
				dark
				small
				@click="dialogVisible = false"
				>X</v-btn
			>
		</v-dialog>
	</div>
</template>
<script lang="ts">
import Vue from "vue";
import resize from "vue-resize-directive";
import { IRoom } from "@d/interfaces/rooms.interface";
import { IImage } from "@d/interfaces/images.interface";

import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const accommodationCarousel = Vue.extend({
	name: "RoomCarousel",
	directives: {
		resize,
	},
	props: { images: { type: Array as () => Array<IRoom> } },
	data(): {
		dialogVisible: boolean;
		dialogImage: IImage;
		carouselHeight: string;
		mdiChevronLeft: string;
		mdiChevronRight: string;
	} {
		return {
			dialogVisible: false,
			dialogImage: {
				img: "",
				webp: "",
				alt: "",
				sizes: [],
			},
			carouselHeight: "",
			mdiChevronLeft: mdiChevronLeft,
			mdiChevronRight: mdiChevronRight,
		};
	},
	methods: {
		showDialog(image: IImage): void {
			this.dialogVisible = true;
			this.dialogImage = image;
		},
		getCarouselHeight() {
			const el = document.getElementsByClassName("accommodation-carousel-image")[0];
			if (el) {
				this.carouselHeight = el.clientHeight + "px !important";
			}
		},
	},
	mounted(): void {
		console.log("🎠 Room Carousel mounted.");
		this.$nextTick(() => {
			this.getCarouselHeight();
		});
	},
});
export default accommodationCarousel;
</script>
<style lang="scss" scoped>
.body {
	padding-bottom: 1.5rem;
}
.dialog-image-close {
	position: absolute;
	top: 1em;
	left: 1em;
}
.center {
	display: inline-block;
	vertical-align: middle;
}
</style>
