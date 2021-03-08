<template>
  <div class="text-center">
    <Header :images="headerImages" />
    <v-container fluid>
      <v-row
        class="half-quart-height"
        :class="{
          'mb-16': $vuetify.breakpoint.xsOnly,
        }"
        align="center"
        justify="center"
      >
        <v-col cols="12" class="green-on-light pb-16 pt-16">
          <h3
            class="font-italic"
            :class="{
              'display-1': $vuetify.breakpoint.xs,
              'display-2': $vuetify.breakpoint.sm,
              'display-3': $vuetify.breakpoint.mdAndUp,
            }"
          >
            Laajennamme myös ravintolatoiminnan puolelle heti kun ajat antavat
            myöden!
            <br />
            <br />
            Seuratkaa tilannetta Facebookin välityksellä.
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="yellow-on-dark full-height pt-16 pb-16 pl-5 pr-5"
        >
          <v-lazy>
            <VueFB :fbUrl="fbUrl" />
          </v-lazy>
        </v-col>

        <!--
        <v-col
          cols="12"
          md="6"
          class="pl-0 pr-0 ma-0 yellow-on-dark full-height pt-16 pb-16"
        >
          <v-lazy>
            <VueFB :fbUrl="fbUrl" />
          </v-lazy>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="dark-on-yellow full-height pt-16 pb-16">
          <v-lazy>
            <ContactForm :sender="senderForContactForm" />
          </v-lazy>
        </v-col>
      -->
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { restaurant as metaData } from "@h/metaData";

import { restaurantHeaderImages as headerImages } from "@d/restaurant/restaurant.images";
import { IHeaderImages } from "@d/interfaces/images.interface";

import Header from "@c/Header.vue";

import VueFB from "@c/VueFB.vue";

import { socialUrls } from "@d/company/company.data";

export default Vue.extend({
  name: "Restaurant",
  metaInfo: { ...metaData },
  components: { Header, VueFB },
  mounted(): void {
    console.log("🍕 Restaurant mounted!");
  },
  data(): {
    fbUrl: string;
    senderForContactForm: string;
    headerImages: IHeaderImages;
  } {
    return {
      fbUrl: socialUrls.fbUrl,
      senderForContactForm: "restaurant",
      headerImages: headerImages,
    };
  },
});
</script>
<style lang="scss" scoped>
.f-w-400 {
  font-weight: 400;
}
</style>
