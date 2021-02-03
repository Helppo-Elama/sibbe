<template>
  <div>
    <div class="map-responsive" ref="map" data-aos="fade-up"></div>
  </div>
</template>

<script lang="ts">
import { mapOptions, placeIds, markerOptions, routeDestination } from "@d/maps";
import { googleInit } from "@mix/google.init";
import { IgoogleMapsInit } from "@d/interfaces/maps.interface";

const { cafe: placeId } = placeIds.placeIds;
const { routes } = routeDestination;

const googleMapsInit: IgoogleMapsInit = {
  apiKey: "",
  targetRef: "map",
  libraries: ["places"],
  version: "weekly",
  mapOptions: mapOptions,
  placeId: placeId,
  markerOptions: markerOptions,
  routeDestination: routes.cafe,
};

const cafeMaps = googleInit.extend({
  name: "CafeMaps",
  data(): {
    googleMapsInit: IgoogleMapsInit;
    //isOpen: "" | "Avoinna" | "Suljettu"; inherited from GoogleMapInit
  } {
    return {
      googleMapsInit,
      //isOpen: "",
    };
  },
  methods: {
    updateIsOpen(): void {
      if (this.isOpen === "Avoinna") {
        console.log(this.$parent.$parent.$refs["open"]);
        (this.$parent.$parent.$refs["closed"] as HTMLElement).classList.add(
          "d-none"
        );
        (this.$parent.$parent.$refs["open"] as HTMLElement).classList.remove(
          "d-none"
        );
      } else {
        (this.$parent.$parent.$refs["open"] as HTMLElement).classList.add(
          "d-none"
        );
        (this.$parent.$parent.$refs["closed"] as HTMLElement).classList.remove(
          "d-none"
        );
      }
    },
  },
  watch: {
    isOpen: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateIsOpen();
      }
    },
  },
  mounted(): void {
    if (process.env.VUE_APP_GOOGLE_API_KEY) {
      this.googleMapsInit.apiKey = process.env.VUE_APP_GOOGLE_API_KEY;
    } else throw "❌ VUE_APP_GOOGLE_API_KEY not set in .env!";
    this.$nextTick(() => {
      try {
        this.googleMaps(googleMapsInit);
        //this.updateIsOpen();
      } catch (err) {
        console.log(err);
      }
    });
    console.log("🗺 Maps mounted.");
  },
});
export default cafeMaps;
</script>
<style lang="scss" scoped>
.map-responsive {
  overflow: hidden;
  padding-bottom: 100vh;
  position: relative;
  height: 0;
}
.google-map {
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  position: absolute;
}

.open-closed-container {
  margin-top: -8em;
  background: $color4;
  border: 4px solid $color1;
  border-radius: 12px;
}

.closed {
  color: $color2;
}

.yes {
  transform: rotate(-40deg);
}
</style>
