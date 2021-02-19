<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row>
      <v-col
        v-for="(room, i) in roomsData.rooms"
        v-bind:key="room.title + i"
        data-aos="fade-up"
        class="full-height pt-16 pb-16"
        :class="room.htmlClass"
        cols="12"
        v-bind:xs="room.breakpoints.xs"
        v-bind:sm="room.breakpoints.sm"
        v-bind:md="room.breakpoints.md"
        v-bind:xl="room.breakpoints.xl"
        v-bind:lg="room.breakpoints.lg"
      >
        <h3 class="museo museo-heading pt-16 pb-16">{{ room.title }}</h3>
        <v-lazy>
          <RoomCarousel v-bind:images="room.images" />
        </v-lazy>
        <p class="pl-10 pr-10 pt-16 pb-16" v-html="room.body"></p>
        <ul class="equipment">
          <u class="museo pb-2">Huoneen lisätiedot</u>
          <li
            v-for="e in room.equipments"
            v-bind:key="e.title"
            v-bind:title="e.title"
          >
            {{ e.title }}
          </li>
        </ul>
      </v-col>
      <v-col
        v-for="(a, i) in roomsData.additional"
        v-bind:key="i + a.title"
        data-aos="fade-up"
        class="full-height pt-16 pb-16"
        :class="a.htmlClass"
        cols="12"
        v-bind:xs="a.breakpoints.xs"
        v-bind:sm="a.breakpoints.sm"
        v-bind:md="a.breakpoints.md"
        v-bind:xl="a.breakpoints.xl"
        v-bind:lg="a.breakpoints.lg"
      >
        <h3 class="museo museo-heading pt-16 pb-16" v-html="a.title"></h3>
        <RoomAdditionalParser
          v-bind:additional="a"
          v-bind:images="roomsData.additionalImages"
          v-bind:dataType="dataType"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import RoomCarousel from "@m/RoomCarousel.vue";
import { mdiEmailOutline } from "@mdi/js";
import { IRooms } from "@d/interfaces/rooms.interface";
import RoomAdditionalParser from "@m/RoomAdditionalParser.vue";

const roomParser = Vue.extend({
  name: "RoomParser",
  components: { RoomCarousel, RoomAdditionalParser },
  props: {
    roomsData: { type: Object as () => PropType<IRooms> },
    dataType: { type: String },
  },
  data(): {
    emailIcon: string;
  } {
    return {
      emailIcon: mdiEmailOutline,
    };
  },
  mounted(): void {
    console.log("👯‍♂️ Roomparser mounted.");
  },
});
export default roomParser;
</script>
<style lang="scss" scoped>
ul {
  padding-left: 0;
}
</style>
