<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="ma-0">
      <v-col
        v-for="(room, i) in roomsData.rooms"
        :key="room.title + i"
        data-aos="fade-up"
        class="full-height pt-16 pb-16"
        :class="room.htmlClass"
        cols="12"
        :xs="room.breakpoints.xs"
        :sm="room.breakpoints.sm"
        :md="room.breakpoints.md"
        :xl="room.breakpoints.xl"
        :lg="room.breakpoints.lg"
      >
        <h3 class="museo museo-heading pt-16 pb-16">{{ room.title }}</h3>
        <v-lazy>
          <RoomCarousel :images="room.images" />
        </v-lazy>
        <p class="pl-10 pr-10 pt-16 pb-16" v-html="room.body"></p>
        <ul class="equipment">
          <u class="museo pb-2">Huoneen lisätiedot</u>
          <li v-for="e in room.equipments" :key="e.title" :title="e.title">
            {{ e.title }}
          </li>
        </ul>
      </v-col>
      <v-col
        v-if="roomType === 'accommodation'"
        :cols="additional.data[0].breakpoints.xs"
        :md="additional.data[0].breakpoints.md"
        :class="additional.data[0].htmlClass"
        class="pt-16 pb-16"
      >
        <AccommodationRoomAdditionalParser :additional="additional" />
      </v-col>
      <v-col
        v-else
        :cols="additional.data[0].breakpoints.xs"
        :md="additional.data[0].breakpoints.md"
        :class="additional.data[0].htmlClass"
        class="pt-16 pb-16"
      >
        <ConferenceRoomAdditionalParser :additional="additional" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import RoomCarousel from "@m/RoomCarousel.vue";

import AccommodationRoomAdditionalParser from "@m/AccommodationRoomAdditionalParser.vue";
import ConferenceRoomAdditionalParser from "@m/ConferenceRoomAdditionalParser.vue";

import { IRoomAdditionalData, IRooms } from "@d/interfaces/rooms.interface";

const roomParser = Vue.extend({
  name: "RoomParser",
  components: {
    RoomCarousel,
    AccommodationRoomAdditionalParser,
    ConferenceRoomAdditionalParser,
  },
  props: {
    roomsData: { type: Object as () => PropType<IRooms> },
    roomType: { type: String },
  },
  computed: {
    additional(): IRoomAdditionalData {
      return this.$props.roomsData.additional;
    },
  },
  mounted(): void {
    console.log("👯‍♂️ Room parser mounted.");
  },
});
export default roomParser;
</script>
<style lang="scss" scoped>
ul {
  padding-left: 0;
}
</style>
