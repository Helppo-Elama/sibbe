<template>
	<v-container fluid class="ma-0 pa-0">
		<v-row data-aos="fade-up" class="ma-0 pa-0">
			<v-col
				v-for="d in data"
				:key="d.id + d.title"
				:class="d.htmlClass"
				data-aos="fade-up"
				class="full-height pt-16 pb-16 ml-0 mr-0 pl-0 pr-0"
				:cols="d.breakpoints.xs"
				:sm="d.breakpoints.sm"
				:md="d.breakpoints.md"
				:xl="d.breakpoints.xl"
				:lg="d.breakpoints.lg"
			>
				<h3 class="museo museo-heading pt-16 pb-16" v-html="d.title"></h3>
				<!-- MIETI TÄTÄ -->
				<!--
        <v-col
          v-for="(b, i) in d.body"
          :key="b.id + d.title + i"
          data-aos="fade-up"
          class="full-height pt-16 pb-16"
          :cols="d.breakpoints.xs"
          :sm="d.breakpoints.sm"
          :md="d.breakpoints.md"
          :xl="d.breakpoints.xl"
          :lg="d.breakpoints.lg"
        >

        </v-col>
        -->
				<v-col cols="12" sm="5">
					<ul class="museo">
						<u>Koko päivän paketti</u>
						<li>8h kokouspaketti 6-16 hengelle</li>
						<li>Arkisin klo 8-16 tai 9-17</li>
					</ul>
					<p>
						Paketti sisältää tervetulokahvin suolaisella kahvileivällä, kotiruokalounaan ja
						iltapäiväkahvin makean kahvileivän kera
					</p>
				</v-col>
				<v-col cols="12" sm="7">
					<ul class="museo">
						<u> Puolipäiväpaketti </u>
						<li>4h kokous 6-16 hengelle</li>
						<li>Arkisin klo 8-12 tai klo 12-16</li>
					</ul>
					<p>
						Paketti sisältää tervetulokahvin suolaisella kahvileivällä tai iltapäiväkahvin makean
						kahvileivän kera sekä kotiruokalounaan
					</p>
				</v-col>
				<v-col cols="12" sm="6">
					<ul class="museo">
						<u> Iltapaketti </u>
						<li>4h kokous 6-16 hengelle</li>
						<li>Arkisin klo 17-21</li>
					</ul>
					<p>Paketti sisältää tervetulokahvin ja suolaisen tai makean kahvileivän</p>
				</v-col>
				<v-col cols="12" sm="6">
					<ul class="museo">
						<u> Koko päivän paketti </u>
						<li>8h kokouspaketti 6-16 hengelle</li>
						<li>Arkisin klo 8-16 tai 9-17</li>
					</ul>
					<p>
						Paketti sisältää tervetulokahvin suolaisella kahvileivällä, kotiruokalounaan ja
						iltapäiväkahvin makean kahvileivän kera
					</p>
				</v-col>
				<v-col cols="12">
					<h4 class="display-1 museo">Tilavuokrat sopimuksen mukaan</h4>
					<p>
						Lisätiedot ja tarjouspyynnöt sähköpostitse
						<router-link to="/salesmail" class="additional color-light animate"
							>myynti(ät)sibbe.fi <v-icon>{{ emailIcon }}</v-icon></router-link
						>
					</p>
				</v-col>
				<v-col cols="12" md="4" class="vertical-middle">
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
						<div v-if="image.author" class="color-light image-with-author">
							&copy;
							<a :href="image.author.url" rel="noopener noreferrer">{{ image.author.name }}</a>
						</div>
					</div>
				</v-col>
				<v-col cols="12" md="8" class="pt-16">
					<h4 class="display-1 museo pb-5">Sijainti</h4>
					<p class="pb-16">
						Vaikka Sibbe sijaitsee vain 25 minuutin ajomatkan päässä Helsingin keskustasta, 20
						minuuttia lentokentältä, olemme silti luonnon äärellä rauhallisessa maisemassa puhtaassa
						luonnonilmassa.
						<br />
						<br />
						Kokousten lomassa on kaikki Villa Sibben palvelut lähelläsi, virkistäydy välillä
						täysimittaisella frisbeegolfradallamme, käy uimajärvessä uimassa tai vaikka
						moottorikelkkasafarilla.
						<br />
						<br />
						Yhteistyökumppaneidemme kanssa järjestämme juuri teidän ryhmälle sopivan ohjelman ja
						aktiviteetit.
					</p>
					<h4 class="display-1 museo pb-5">
						Ohjel&shy;ma&shy;pal&shy;ve&shy;lut ja ak&shy;ti&shy;vi&shy;tee&shy;tit
					</h4>
					<p>
						Monipuolisen yhteistyöverkostomme avulla takaamme että ryhmällesi löytyy monipuolista
						ohjelmaa ja aktiviteettia kauden mukaan.
						<br />
						<br />
						Frisbeegolfia 20 -väyläisellä kilpatason radalla. Leikkimieliseen tai vakavaankin
						kilvoitteluun soveltuu mainiosti frisbeegolfin pelaaminen.
					</p>
					<p>
						Muita Sibben aktiviteetteja ovat mm: Beach Lentis, SUP-lautailu, melonta ja
						hiljentymistä varten Levon polku.
					</p>
				</v-col>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts">
import { IImage } from "@d/interfaces/images.interface"
import { IRoomAdditionalData, IRoomsAdditional } from "@d/interfaces/rooms.interface"
import { mdiEmailOutline } from "@mdi/js"
import Vue, { PropType } from "vue"

export default Vue.extend({
	name: "ConferenceRoomAdditionalParser",
	props: {
		additional: { type: Object as () => PropType<IRoomsAdditional>, required: true }
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
	}
})
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
