<template>
  <div class="header">
    <div class="header-image-container">
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
            <source :srcSet="image.webp.srcSet" type="image/webp" />
            <img
              class="header"
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
            <source :srcSet="image.webp.srcSet" type="image/webp" />
            <img
              class="header"
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
      <div class="centered">
        <div class="d-inline-flex museo header-museo">VILLA</div>
        <div class="d-inline-flex bello header-bello">Sibbe</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import resize from "vue-resize-directive";
import { accommodationCarouselImages as images } from "@d/accommodation/accommodation.images";
import { IImage } from "@d/interfaces/images.interface";

import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const accommodationCarousel = Vue.extend({
  name: "AccommodationCarousel",
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
    console.log("🎭 Accommodation Carousel mounted.");
    this.$nextTick(() => {
      this.getCarouselHeight();
    });
  },
});
export default accommodationCarousel;
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
</style>
