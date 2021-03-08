<template>
  <div>
    <v-navigation-drawer
      v-model="sidebar"
      app
      width="220"
      class="light-on-dark"
      :permanent="$vuetify.breakpoint.xlOnly"
      :temporary="$vuetify.breakpoint.lgAndDown"
    >
      <v-list>
        <v-list-item
          v-for="item in appBar"
          :key="item.title"
          :to="item.path"
          class="color-yellow"
        >
          <v-list-item-icon>
            <v-icon class="color-light">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="color-light">{{
            item.title
          }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="menu-icon-right">
      <span class="hidden-lg-and-up menu-icon-button-resize">
        <v-app-bar-nav-icon
          @click="sidebar = !sidebar"
          class="menu-icon menu-icon-button-resize"
          aria-label="menu"
        >
          <v-icon size="55px">{{ mdiMenu }}</v-icon>
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-items class="hidden-md-and-down d-xl-none light-on-dark">
        <v-btn
          text
          v-for="item in appBar"
          :key="item.title"
          :to="item.path"
          class="color-light"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import {
  mdiMenu,
  mdiHomeCircleOutline,
  mdiBedOutline,
  mdiAccountGroupOutline,
  mdiHeartCircleOutline,
  mdiMapSearchOutline,
  //mdiPartyPopper,
  mdiFoodForkDrink,
  mdiCoffeeOutline,
  mdiCalendarArrowRight,
} from "@mdi/js";
interface AppBarItem {
  title: string;
  path: string;
  icon?: string;
}
const appBar: Array<AppBarItem> = [
  { title: "Etusivu", path: "/", icon: mdiHomeCircleOutline },
  { title: "Majoitus", path: "/accommodation.html", icon: mdiBedOutline },
  {
    title: "Varaa huone",
    path: "/booking.html",
    icon: mdiCalendarArrowRight,
  },
  {
    title: "Kokoukset",
    path: "/conference.html",
    icon: mdiAccountGroupOutline,
  },
  /*
  {
    title: "Juhlat",
    path: "/festivity.html",
    icon: mdiPartyPopper,
  },
  */
  {
    title: "Ravintola",
    path: "/restaurant.html",
    icon: mdiFoodForkDrink,
  },

  { title: "Kahvila", path: "/cafe.html", icon: mdiCoffeeOutline },
  {
    title: "Virkisty",
    path: "/recreation.html",
    icon: mdiHeartCircleOutline,
  },

  { title: "Yhteystiedot", path: "/contact.html", icon: mdiMapSearchOutline },
];
const nav = Vue.extend({
  name: "Nav",
  data() {
    return {
      appBar,
      appTitle: "Villa Sibbe",
      sidebar: false,
      mdiMenu: mdiMenu,
    };
  },
  mounted() {
    if (this.$vuetify.breakpoint.xlOnly) this.sidebar = true;

    console.log("🥽 Nav mounted.");
  },
});
export default nav;
</script>
<style lang="scss" scoped>
nav {
  background-color: transparent !important;
}

a:hover,
a:active {
  color: $color4 !important;
  text-shadow: 0.02rem 0.02rem $color3;
}

header {
  @extend .light-on-dark;
}

.menu-icon {
  color: $color5 !important;
  background-color: rgba($color1, 0.3);
}
.menu-icon-button-resize {
  width: 60px !important;
  height: 60px !important;
}
// Menu icon to right side
::v-deep .v-toolbar__content {
  flex-flow: row-reverse;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .menu-icon-right {
    margin-top: 0.5em !important;
  }
  nav {
    background-color: $color3 !important;
  }
  header {
    background-color: transparent !important;
    box-shadow: none !important;
  }
}
@media #{map-get($display-breakpoints, 'xl-only')} {
  nav {
    background-color: $color3 !important;
  }
  header {
    background-color: transparent !important;
    box-shadow: none !important;
  }
}
</style>
