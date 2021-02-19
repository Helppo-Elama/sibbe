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
          <source v-bind:srcSet="image.webp.srcSet" type="image/webp" />
          <img
            class="accommodation-carousel-image zoom-in"
            v-on:click="showDialog(image)"
            :ref="image.img.src"
            v-bind:data-v="image.img.src"
            v-bind:srcSet="image.img.srcSet"
            v-bind:width="image.img.width"
            v-bind:height="image.img.height"
            v-bind:alt="image.alt"
            loading="lazy"
          />
        </picture>
      </v-carousel-item>
    </v-carousel>

    <v-dialog content-class="dialog-image" v-model="dialogVisible" fullscreen>
      <picture>
        <source v-bind:srcSet="dialogImage.webp.srcSet" type="image/webp" />
        <img
          :src="dialogImage.img.src"
          class="center"
          v-bind:srcSet="dialogImage.img.srcSet"
          v-bind:width="dialogImage.img.width"
          v-bind:height="dialogImage.img.height"
          v-bind:alt="dialogImage.alt"
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
      const el = document.getElementsByClassName(
        "accommodation-carousel-image"
      )[0];
      if (el) {
        this.carouselHeight = el.clientHeight + "px !important";
      }
    },
  },
  mounted(): void {
    console.log("🎠 Accommodation carousel mounted.");
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
