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
            <source v-bind:srcSet="image.webp.srcSet" type="image/webp" />
            <img
              class="header-carousel-image header"
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
            <source v-bind:srcSet="image.webp.srcSet" type="image/webp" />
            <img
              class="header-carousel-image header"
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
      <div class="centered">
        <div class="d-inline-flex museo header-museo">CAFE</div>
        <div class="d-inline-flex bello header-bello">Sibbe</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import resize from "vue-resize-directive";
import { IImage } from "@d/interfaces/images.interface";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const cafeCarousel = Vue.extend({
  name: "CafeCarousel",
  directives: {
    resize,
  },
  props: { images: { type: Object as () => PropType<IImage[]> } },
  data(): {
    carouselHeight: string;
    carouselPrevHeight: number | undefined;
    mdiChevronLeft: string;
    mdiChevronRight: string;
  } {
    return {
      carouselHeight: "",
      carouselPrevHeight: 0,
      mdiChevronLeft: mdiChevronLeft,
      mdiChevronRight: mdiChevronRight,
    };
  },
  methods: {
    getCarouselHeight() {
      const elements = document.getElementsByClassName("header-carousel-image");
      let heightArray: Array<number> = [];
      for (let i = 0; i < elements.length; i++) {
        heightArray.push(elements[i].clientHeight);
      }
      const height = Math.max(...heightArray);
      this.carouselHeight = height + "px !important";
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
