<template>
  <div class="text-center">
    <Header />
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
            Majoitu, kokousta ja viihdy tammipuiden suojassa.
          </h3>
        </v-col>
      </v-row>
      <v-lazy>
        <Hero />
      </v-lazy>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="green-on-light full-height pt-16 pb-16 pl-5 pr-5"
        >
          <v-lazy>
            <Reviews />
          </v-lazy>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="pl-0 pr-0 ma-0 yellow-on-dark full-height pt-16 pb-16"
        >
          <v-lazy>
            <VueFB />
          </v-lazy>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="dark-on-yellow full-height pt-16 pb-16">
          <v-lazy>
            <ContactForm v-bind:sender="senderForContactForm" />
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { home as metaData } from "@h/metaData";

import Header from "@c/Header.vue";
import Hero from "@c/Hero.vue";

import VueFB from "@c/VueFB.vue";
import Reviews from "@c/Reviews.vue";
import ContactForm from "@c/ContactForm.vue";

export default Vue.extend({
  name: "Home",
  metaInfo: { ...metaData },
  components: { Header, Hero, VueFB, Reviews, ContactForm },
  mounted(): void {
    console.log("👽 Home mounted!");
  },
  data(): { senderForContactForm: string } {
    return {
      senderForContactForm: "feedback",
    };
  },
});
</script>
<style lang="scss" scoped>
.f-w-400 {
  font-weight: 400;
}
</style>
