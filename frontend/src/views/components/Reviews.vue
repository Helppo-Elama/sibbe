<template>
  <div data-aos="fade-up">
    <h3 class="museo museo-heading pb-6">Asiakkai&shy;den arvoste&shy;lut</h3>
    <v-col cols="12">
      <h4 class="font-italic pb-16">
        "Panostamme hyvään asiakaskokemukseen ja se näkyy myös arvosanoissamme."
      </h4>
    </v-col>
    <div v-for="(star, i) in stars" :key="i" class="stars pb-4">
      <a :href="star.href"
        ><img
          :src="star.image"
          :alt="star.site"
          :style="star.imageMaxWidth"
          class="stars pb-3"
      /></a>
      <div
        :style="starsStyles(star.initLevel)"
        class="rating text-center"
      ></div>
      <div class="rating-shadow text-center">★★★★★</div>
    </div>
    <img
      :src="logo.image"
      :alt="logo.alt"
      :style="logo.imageMaxWidth"
      class="stars pb-16"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Booking from "@i/stars/booking.com-logo.svg";
import Hotels from "@i/stars/hotels.com-logo.svg";
import Google from "@i/stars/google-logo.svg";
import Tripadvisor from "@i/stars/tripadvisor-logo.svg";

const Reviews = Vue.extend({
  name: "Reviews",
  data(): {
    starsInterval: number;
    increment: number;
    logo: {
      image: string;
      imageMaxWidth: string;
      alt: string;
    };
    stars: {
      site: string;
      href: string;
      image: string;
      imageMaxWidth: string;
      initLevel: number;
      level: number;
    }[];
  } {
    return {
      starsInterval: 0,
      increment: 1,
      logo: {
        image: "/img/villa-sibbe-small.png",
        imageMaxWidth: "width: 256px;",
        alt: "Villa Sibbe logo",
      },
      stars: [
        {
          site: "Booking",
          href: "https://www.booking.com/hotel/fi/villa-sibbe",
          image: Booking,
          imageMaxWidth: "width: 150px;",
          initLevel: 0,
          level: 92,
        },
        {
          site: "Hotels",
          href: "https://fi.hotels.com/ho754261472/villa-sibbe-sipoo-suomi/",
          image: Hotels,
          imageMaxWidth: "width: 160px;",
          initLevel: 0,
          level: 86,
        },
        {
          site: "Google",
          href: "https://www.google.com/search?q=google+villa+sibbe",
          image: Google,
          imageMaxWidth: "width: 140px;",
          initLevel: 0,
          level: 94,
        },
        {
          site: "Tripadvisor",
          href:
            "https://www.tripadvisor.com/Hotel_Review-g8391316-d11764831-Reviews-Villa_Sibbe-Soderkulla_Uusimaa.html",
          image: Tripadvisor,
          imageMaxWidth: "width: 140px;",
          initLevel: 0,
          level: 80,
        },
      ],
    };
  },
  mounted(): void {
    console.log("🎈 Reviews mounted.");
    let max: number;
    this.stars.forEach((data) => {
      if (max < data.level) max = data.level;
    });
    this.starsInterval = window.setInterval(() => {
      this.starsGetLevelProgress(this.increment, max);
    }, 30);
  },
  methods: {
    starsGetLevelProgress: function (value: number, max: number) {
      this.stars.forEach((data) => {
        data.initLevel = Math.min(
          Math.floor(data.initLevel + value),
          data.level
        );
        if (data.initLevel === max) {
          clearInterval(this.starsInterval);
        }
      });
    },
    starsStyles(stars: number) {
      stars = (stars / 100) * 5;
      return "--rating: " + stars;
    },
  },
  beforeDestroy: function () {
    clearInterval(this.starsInterval);
  },
});
export default Reviews;
</script>

<style lang="scss" scoped>
$star-size: 3rem;
$star-color: $color5;
$star-background: $color2;

.rating {
  --percent: calc(var(--rating) / 5 * 100%);
  margin: 1rem 0;
  font-size: $star-size;
  font-family: Times;
  line-height: 1;
}
.rating::before {
  content: "★★★★★";
  letter-spacing: 3px;
  background: linear-gradient(
    90deg,
    $star-background var(--percent),
    $star-color var(--percent)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.rating-shadow {
  position: relative;
  letter-spacing: 3px;
  left: 0;
  top: -4rem;
  --percent: 100%;
  margin: 1rem;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;
  z-index: -1;
  color: $star-color;
}
.stars {
  margin-bottom: -2rem;
}
</style>
