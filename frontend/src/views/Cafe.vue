<template>
  <div class="text-center">
    <CafeCarousel />
    <v-container fluid class="pa-0 ma-0">
      <v-row
        class="ma-0 yellow-on-dark half-quart-height pl-10 pr-10"
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <div class="pb-10">
            <div class="d-inline-flex museo header-museo">CAFE</div>
            <div class="d-inline-flex bello header-bello">Sibbe</div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="4"
          class="d-flex align-center justify-center pb-16"
        >
          <div ref="open" class="d-none open-container pa-5">
            <div class="d-flex color-dark">
              <h2 class="bello yes pt-2">Kyllä!</h2>
              <h2 class="museo pt-5 ml-n3">olemme</h2>
            </div>
            <h1 class="museo open">Avoinna</h1>
            <div class="d-flex color-dark">
              <h2 class="bello pt-2">
                Tulkaapa siis<br />
                herkuttelemaan.
              </h2>
            </div>
          </div>
          <div ref="closed" class="d-none closed-container pa-5">
            <div class="color-dark">
              <h2 class="bello">Valitettavasti</h2>
              <h2 class="museo">olemme</h2>
            </div>
            <h1 class="museo closed">Suljettu</h1>
            <div class="d-flex color-dark">
              <h2 class="bello pt-2">
                Tulkaa siis<br />
                myöhemmin uudestaan!
              </h2>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="4" class="mt-n16 pb-16">
          <h3
            class="font-italic text-center"
            :class="{
              'pt-10': $vuetify.breakpoint.smAndDown,
              'display-1': $vuetify.breakpoint.xs,
              'display-2': $vuetify.breakpoint.sm,
              'display-3': $vuetify.breakpoint.mdAndUp,
            }"
          >
            Makuja Mukaan!
          </h3>
        </v-col>
        <v-col cols="12" lg="4">
          <img :src="logo.image" :alt="logo.alt" :style="logo.imageMaxWidth" />
        </v-col>
      </v-row>
      <v-row
        data-aos="fade-up"
        class="ma-0 dark-on-yellow half-height pt-16 pb-16 pl-5 pr-5"
        align="center"
        justify="center"
      >
        <v-col cols="12" sm="6"
          ><p>
            <b>Cafe Sibbe</b> on Kotoisa rantakahvila Joensuun Tilan satamassa
            Sipoossa. Vieressä aktiviteetteja moneen makuun. Tule viihtymään
            kanssamme pidemmäksikin aikaa!
          </p>
        </v-col>
        <v-col cols="12" sm="6">
          <p>
            <strong>
              Kahvilatuotteita<br />
              Voileipiä<br />
              Leivonnaisia<br />
              Kahvia<br />
              Virvokkeita
            </strong>
          </p>
        </v-col>
      </v-row>
      <v-lazy>
        <v-row class="pl-0 pr-0 ma-0 green-on-light full-height pt-16 pb-16">
          <v-col cols="12">
            <CafeMaps />
          </v-col>
        </v-row>
      </v-lazy>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CafeMaps from "@c/CafeMaps.vue";
import { cafe as metaData } from "@h/metaData";

import CafeCarousel from "@c/CarouselCafe.vue";
import { cafeImages as images } from "@d/cafe/cafe.data";
import { IImage } from "@d/interfaces/images.interface";
import Logo from "@i/originals/cafe/lofbergs-logo.svg";

const cafe = Vue.extend({
  name: "Cafe",
  metaInfo: { ...metaData },
  components: { CafeCarousel, CafeMaps },
  data(): {
    one: IImage;
    logo: { image: string; imageMaxWidth: string; alt: string };
  } {
    return {
      one: images.one,
      logo: {
        image: Logo,
        imageMaxWidth: "width: 10em;",
        alt: "löfbergs logo",
      },
    };
  },
  methods: {},
  mounted(): void {
    console.log("☕ Cafe mounted!");
  },
});
export default cafe;
</script>

<style lang="scss" scoped>
.header-museo {
  padding-top: 0.8em;
  font-size: 8vw;
  vertical-align: top;
}
.header-bello {
  font-size: 20vw;
}

.open-container {
  background: $color4;
  border: 4px solid $color3;
  border-radius: 12px;
}

.closed-container {
  background: $color4;
  border: 4px solid $color2;
  border-radius: 12px;
}
.closed {
  color: $color2;
}

.open {
  color: $color3;
}
.yes {
  transform: rotate(-40deg);
}
</style>
