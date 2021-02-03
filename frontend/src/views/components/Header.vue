<template>
  <div class="header-image-container">
    <div v-if="$vuetify.breakpoint.mdAndDown">
      <picture>
        <source v-bind:srcSet="normal.webp.srcSet" type="image/webp" />
        <img
          class="header"
          :src="normal.img.src"
          v-bind:srcSet="normal.img.srcSet"
          v-bind:width="normal.img.width"
          v-bind:height="normal.img.height"
          v-bind:alt="normal.alt"
          loading="lazy"
        />
      </picture>
    </div>
    <div v-else>
      <picture>
        <source v-bind:srcSet="cropped.webp.srcSet" type="image/webp" />
        <img
          class="header"
          :src="cropped.img.src"
          v-bind:srcSet="cropped.img.srcSet"
          v-bind:width="cropped.img.width"
          v-bind:height="cropped.img.height"
          v-bind:alt="cropped.alt"
          loading="lazy"
        />
      </picture>
    </div>
    <div class="centered">
      <div class="museo header-museo">VILLA</div>
      <div class="bello header-bello">Sibbe</div>
    </div>
    <div class="color-light source-kivaa-tekemista-fi">
      &copy;
      <a href="https://kivaatekemistä.fi" rel="noopener noreferrer"
        >KivaaTekemistä.fi</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { headerImages as images } from "@d/commonImages";
import { IImage } from "@d/interfaces/images.interface";

const { normal, cropped } = images;
const Header = Vue.extend({
  name: "Header",
  data(): { normal: IImage; cropped: IImage } {
    return {
      normal: normal,
      cropped: cropped,
    };
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
