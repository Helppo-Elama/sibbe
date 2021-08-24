<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0 pa-0">
			<v-lazy>
				<v-col cols="12" class="ma-0 pa-0">
					<RoomParser :rooms-data="accommodation" :room-type="roomType" />
				</v-col>
			</v-lazy>
		</v-row>
	</v-container>
</template>
<script lang="ts">
import Vue from "vue"
import RoomParser from "@c/common/RoomParser.vue"
import accommodation from "@d/accommodation/accommodation.data"
import { IRooms } from "@d/interfaces/rooms.interface"

export default Vue.extend({
	name: "AccommodationList",
	components: { RoomParser },
	data(): {
		accommodation: IRooms
		roomType: string
	} {
		return {
			accommodation,
			roomType: "accommodation"
		}
	},
	mounted(): void {
		console.log("🏠 Accommodation list mounted.")
	}
})
</script>
<style lang="scss" scoped>
.empty {
	display: none;
}
</style>
