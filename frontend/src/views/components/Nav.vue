<template>
  <div>
    <v-navigation-drawer
      v-model="sidebar"
      app
      width="220"
      class="light-on-dark"
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
      <span class="hidden-md-and-up menu-icon-button-resize">
        <v-app-bar-nav-icon
          @click="sidebar = !sidebar"
          class="menu-icon menu-icon-button-resize"
          aria-label="menu"
        >
          <v-icon size="55px">{{ mdiMenu }}</v-icon>
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-items
        class="hidden-sm-and-down hidden-lg-and-up light-on-dark"
      >
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
  mdiMapSearchOutline,
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
    title: "Kokoukset",
    path: "/conference.html",
    icon: mdiAccountGroupOutline,
  },
  {
    title: "Varaa huone",
    path: "/booking.html",
    icon: mdiCalendarArrowRight,
  },
  { title: "Yhteystiedot", path: "/contact.html", icon: mdiMapSearchOutline },
  { title: "Kahvila", path: "/cafe.html", icon: mdiCoffeeOutline },
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
    if (this.$vuetify.breakpoint.lgAndUp) this.sidebar = true;

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

@media #{map-get($display-breakpoints, 'sm-and-down')} {
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
@media #{map-get($display-breakpoints, 'lg-and-up')} {
  nav {
    background-color: $color3 !important;
  }
  header {
    background-color: transparent !important;
    box-shadow: none !important;
  }
}
</style>
