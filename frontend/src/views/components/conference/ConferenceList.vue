<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0 pa-0">
			<v-col cols="12" class="ma-0 pa-0">
				<RoomParser :rooms-data="conference" />
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts">
import RoomParser from "@c/common/RoomParser.vue"
import conference from "@d/conference/conference.data"
import { IRooms } from "@d/interfaces/rooms.interface"
import Vue from "vue"

export default Vue.extend({
	name: "ConferenceList",
	components: { RoomParser },
	data(): {
		conference: IRooms
		roomType: string
	} {
		return {
			conference,
			roomType: "conference"
		}
	},
	mounted(): void {
		console.log("🏠 Conference list mounted.")
	}
})
</script>
<style lang="scss" scoped>
.empty {
	display: none;
}
</style>
