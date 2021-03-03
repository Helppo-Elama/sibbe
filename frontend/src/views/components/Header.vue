<template>
  <div class="header-image-container">
    <div v-if="$vuetify.breakpoint.mdAndDown">
      <picture>
        <source v-bind:srcSet="images.normal.webp.srcSet" type="image/webp" />
        <img
          class="header"
          :src="images.normal.img.src"
          v-bind:srcSet="images.normal.img.srcSet"
          v-bind:width="images.normal.img.width"
          v-bind:height="images.normal.img.height"
          v-bind:alt="images.normal.alt"
          loading="lazy"
        />
      </picture>
    </div>
    <div v-else>
      <picture>
        <source v-bind:srcSet="images.cropped.webp.srcSet" type="image/webp" />
        <img
          class="header"
          :src="images.cropped.img.src"
          v-bind:srcSet="images.cropped.img.srcSet"
          v-bind:width="images.cropped.img.width"
          v-bind:height="images.cropped.img.height"
          v-bind:alt="images.cropped.alt"
          loading="lazy"
        />
      </picture>
    </div>
    <div class="centered">
      <div class="museo header-museo">VILLA</div>
      <div class="bello header-bello">Sibbe</div>
    </div>
    <div
      v-if="kivaatekemista === true"
      class="color-light source-kivaa-tekemista-fi"
    >
      &copy;
      <a href="https://kivaatekemistä.fi" rel="noopener noreferrer"
        >KivaaTekemistä.fi</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IImage } from "@d/interfaces/images.interface";

const Header = Vue.extend({
  name: "Header",
  props: {
    images: { type: Object as () => PropType<Record<string, IImage>> },
    kivaatekemista: { type: Boolean },
  },

  mounted() {
    console.log("👍 Header mounted!");
  },
});
export default Header;
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
  .source-kivaa-tekemista-fi {
    font-size: 2.2vw;
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .source-kivaa-tekemista-fi {
    font-size: 2.7vw;
  }
}
</style>
