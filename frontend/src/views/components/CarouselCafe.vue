<template>
  <div class="header">
    <v-carousel
      v-if="$vuetify.breakpoint.mdAndDown"
      hide-delimiter-background
      show-arrows-on-hover
      :prev-icon="mdiChevronLeft"
      :next-icon="mdiChevronRight"
      v-resize:debounce="getCarouselHeight"
      height=""
      :style="{ height: this.carouselHeight }"
    >
      <v-carousel-item eager v-for="(image, i) in normal" :key="i">
        <picture>
          <source v-bind:srcSet="image.webp.srcSet" type="image/webp" />
          <img
            class="header"
            :src="image.img.src"
            v-bind:srcSet="image.img.srcSet"
            v-bind:width="image.img.width"
            v-bind:height="image.img.height"
            v-bind:alt="image.alt"
            loading="lazy"
          />
        </picture>
      </v-carousel-item>
    </v-carousel>
    <v-carousel
      v-else
      hide-delimiter-background
      show-arrows-on-hover
      :prev-icon="mdiChevronLeft"
      :next-icon="mdiChevronRight"
      v-resize:debounce="getCarouselHeight"
      height=""
      :style="{ height: this.carouselHeight }"
    >
      <v-carousel-item eager v-for="(image, i) in cropped" :key="i">
        <picture>
          <source v-bind:srcSet="image.webp.srcSet" type="image/webp" />
          <img
            class="header"
            :src="image.img.src"
            v-bind:srcSet="image.img.srcSet"
            v-bind:width="image.img.width"
            v-bind:height="image.img.height"
            v-bind:alt="image.alt"
            loading="lazy"
          />
        </picture>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import resize from "vue-resize-directive";
import { cafeCarouselImages as images } from "@d/cafe/cafe.data";
import { IImage } from "@d/interfaces/images.interface";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const cafeCarousel = Vue.extend({
  name: "CafeCarousel",
  directives: {
    resize,
  },
  data(): {
    normal: Array<IImage>;
    cropped: Array<IImage>;
    carouselHeight: string;
    mdiChevronLeft: string;
    mdiChevronRight: string;
  } {
    return {
      normal: images.normal,
      cropped: images.cropped,
      carouselHeight: "",
      mdiChevronLeft: mdiChevronLeft,
      mdiChevronRight: mdiChevronRight,
    };
  },
  methods: {
    getCarouselHeight() {
      let item = document.getElementsByClassName("v-carousel__item");
      this.carouselHeight = item[0].clientHeight + "px !important";
    },
  },
  mounted(): void {
    console.log("🎭 Carousel mounted.");
    this.$nextTick(() => {
      this.getCarouselHeight();
    });
  },
});
export default cafeCarousel;
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: auto;
  display: block;
}
.empty {
  display: none;
}
</style>
