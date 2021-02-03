<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="ma-0">
      <v-lazy>
        <RoomParser v-bind:roomsData="conference" v-bind:dataType="roomType" />
      </v-lazy>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import RoomParser from "@m/RoomParser.vue";
import { conference } from "@d/roomDataCollector";
import { IRooms } from "@d/interfaces/rooms.interface";

const conferenceList = Vue.extend({
  name: "ConferenceList",
  components: { RoomParser },
  data(): {
    conference: IRooms;
    roomType: string;
  } {
    return {
      conference: conference,
      roomType: "conference",
    };
  },
  mounted(): void {
    console.log("🏠 Conference list mounted.");
  },
});
export default conferenceList;
</script>
<style lang="scss" scoped>
.empty {
  display: none;
}
</style>
