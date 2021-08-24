<template>
	<div class="header">
		<div class="header-image-container">
			<v-carousel
				v-if="$vuetify.breakpoint.mdAndDown"
				cycle
				interval="3000"
				hide-delimiter-background
				show-arrows-on-hover
				:prev-icon="mdiChevronLeft"
				:next-icon="mdiChevronRight"
				v-resize:debounce="getCarouselHeight"
				height=""
				:style="{ height: this.carouselHeight }"
			>
				<v-carousel-item eager v-for="(image, i) in images.normal" :key="i">
					<picture>
						<source :srcSet="image.webp.srcSet" type="image/webp" />
						<img
							class="header-carousel-image header"
							:src="image.img.src"
							:srcSet="image.img.srcSet"
							:width="image.img.width"
							:height="image.img.height"
							:alt="image.alt"
							loading="lazy"
						/>
					</picture>
				</v-carousel-item>
			</v-carousel>
			<v-carousel
				v-else-if="images.cropped"
				cycle
				interval="3000"
				hide-delimiter-background
				show-arrows-on-hover
				:prev-icon="mdiChevronLeft"
				:next-icon="mdiChevronRight"
				v-resize:debounce="getCarouselHeight"
				height=""
				:style="{ height: this.carouselHeight }"
			>
				<v-carousel-item eager v-for="(image, i) in images.cropped" :key="i">
					<picture>
						<source :srcSet="image.webp.srcSet" type="image/webp" />
						<img
							class="header-carousel-image header"
							:src="image.img.src"
							:srcSet="image.img.srcSet"
							:width="image.img.width"
							:height="image.img.height"
							:alt="image.alt"
							loading="lazy"
						/>
					</picture>
				</v-carousel-item>
			</v-carousel>
			<v-carousel
				v-else
				cycle
				interval="3000"
				hide-delimiter-background
				show-arrows-on-hover
				:prev-icon="mdiChevronLeft"
				:next-icon="mdiChevronRight"
				v-resize:debounce="getCarouselHeight"
				height=""
				:style="{ height: this.carouselHeight }"
			>
				<v-carousel-item eager v-for="(image, i) in images.normal" :key="i">
					<picture>
						<source :srcSet="image.webp.srcSet" type="image/webp" />
						<img
							class="header-carousel-image header"
							:src="image.img.src"
							:srcSet="image.img.srcSet"
							:width="image.img.width"
							:height="image.img.height"
							:alt="image.alt"
							loading="lazy"
						/>
					</picture>
				</v-carousel-item>
			</v-carousel>
			<div v-if="textOverlay" class="centered">
				<div class="d-inline-flex museo header-museo">{{ textOverlay[0] }}</div>
				<div class="d-inline-flex bello header-bello">{{ textOverlay[1] }}</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import resize from "vue-resize-directive"
import { IImage } from "@d/interfaces/images.interface"
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"

export default Vue.extend({
	name: "CafeCarousel",
	directives: {
		resize
	},
	props: {
		images: { type: Object as () => PropType<IImage[]>, required: true },
		textOverlay: {
			type: Array as () => PropType<string>,
			default() {
				return undefined
			}
		},
		logoOverlay: {
			type: Object as () => PropType<Record<string, string>>,
			default() {
				return undefined
			}
		}
	},
	data(): {
		carouselHeight: string
		carouselPrevHeight: number | undefined
		mdiChevronLeft: string
		mdiChevronRight: string
	} {
		return {
			carouselHeight: "",
			carouselPrevHeight: 0,
			mdiChevronLeft,
			mdiChevronRight
		}
	},
	methods: {
		getCarouselHeight() {
			const elements = document.getElementsByClassName("header-carousel-image")
			const heightArray: Array<number> = []
			for (let i = 0; i < elements.length; i += 1) {
				heightArray.push(elements[i].clientHeight)
			}
			const height = Math.max(...heightArray)
			this.carouselHeight = `${height}px !important`
		}
	},
	mounted(): void {
		console.log("🎭 Carousel mounted.")
		this.$nextTick(() => {
			this.getCarouselHeight()
		})
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
	font-size: 7vw;
}
.header-bello {
	font-size: 17vw;
}
</style>
