<template>
	<v-container fluid class="ma-0 pa-0">
		<!-- MIETI TÄTÄ -->
		<v-row>
			<v-col
				cols="12"
				:class="data[0].htmlClass"
				:xs="data[0].breakpoints.xs"
				:sm="data[0].breakpoints.sm"
				:md="data[0].breakpoints.md"
				:xl="data[0].breakpoints.xl"
				:lg="data[0].breakpoints.lg"
			>
				<!--
        <v-col
          data-aos="fade-up"
          cols="12"
          class="full-height pt-16 pb-16"
          :class="data.htmlClass"
          :xs="data.breakpoints.xs"
          :sm="data.breakpoints.sm"
          :md="data.breakpoints.md"
          :xl="data.breakpoints.xl"
          :lg="data.breakpoints.lg"
        >
        </v-col>
        -->
				<h3 class="museo museo-heading pt-16 pb-16" v-html="data[0].title"></h3>
				<p>
					Huoneet ovat valmiina tulopäivänä klo 15 alkaen ja ne tulee luovuttaa
					läh&shy;tö&shy;päi&shy;vä&shy;nä klo 11 mennessä. Voit tehdä suoraan varauksen
					<router-link class="additional color-green animate" to="/siteminder">
						<v-icon size="20px">{{ "$vuetify.icons.siteminder" }}</v-icon>
						täältä</router-link
					>.
					<br />
					<br />
					Voit myös tiedustella varauksia esimerkiksi pidemmälle ajanjaksolle tai muuten
					erityistoiveilla kir&shy;joit&shy;ta&shy;mal&shy;la sähköpos&shy;tia
					o&shy;soit&shy;tee&shy;seen
					<router-link to="/mail" class="additional color-green animate"
						>villa(ät)sibbe.fi <v-icon>{{ emailIcon }}</v-icon></router-link
					>.
				</p>
			</v-col>
			<v-col cols="12" md="6">
				<div style="position: relative">
					<picture>
						<source :srcSet="image.webp.srcSet" type="image/webp" />
						<img
							:src="image.img.src"
							:srcSet="image.img.srcSet"
							:width="image.img.width"
							:height="image.img.height"
							:alt="image.alt"
							loading="lazy"
						/>
					</picture>
					<div class="color-light image-with-author">
						&copy;
						<a :href="image.author.url" rel="noopener noreferrer">{{ image.author.name }}</a>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts">
import Vue, { PropType } from "vue"
import { IRoomsAdditional, IRoomAdditionalData } from "@d/interfaces/rooms.interface"
import { IImage } from "@d/interfaces/images.interface"
import { mdiEmailOutline } from "@mdi/js"

const accommodationParser = Vue.extend({
	name: "AccommodationRoomAdditionalParser",
	props: {
		additional: { type: Object as () => PropType<IRoomsAdditional> }
	},
	data(): {
		emailIcon: string
	} {
		return {
			emailIcon: mdiEmailOutline
		}
	},
	computed: {
		image(): IImage {
			return this.$props.additional.image
		},
		data(): IRoomAdditionalData {
			return this.$props.additional.data
		}
	},
	mounted(): void {
		console.log("👓 Accommodation additional data parser mounted.")
	}
})
export default accommodationParser
</script>
<style lang="scss" scoped>
ul {
	padding-left: 0;
}
.image-with-author {
	position: absolute;
	bottom: 0.5em;
	right: 0.5em;
}
a {
	font-weight: bold;
	white-space: nowrap;
}
@media #{map-get($display-breakpoints, 'sm-only')} {
	.image-with-author {
		font-size: 2.2vw;
	}
}

@media #{map-get($display-breakpoints, 'xs-only')} {
	.image-with-author {
		font-size: 2.7vw;
	}
}
</style>
