<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="ma-0">
      <RoomParser v-bind:roomsData="accommodation" v-bind:dataType="roomType" />
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import RoomParser from "@m/RoomParser.vue";
import { accommodation } from "@d/roomDataCollector";
import { IRooms } from "@d/interfaces/rooms.interface";

const accommodationList = Vue.extend({
  name: "AccommodationList",
  components: { RoomParser },
  data(): {
    accommodation: IRooms;
    roomType: string;
  } {
    return {
      roomType: "accommodation",
      accommodation: accommodation,
    };
  },
  mounted(): void {
    console.log("🏠 Accommodation list mounted.");
  },
});
export default accommodationList;
</script>
<style lang="scss" scoped>
.empty {
  display: none;
}
</style>
