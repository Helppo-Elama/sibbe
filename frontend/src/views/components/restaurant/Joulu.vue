<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0" align="center" justify="center">
			<v-col cols="12" md="8">
				<h4 class="museo">Ke 8.12. - La 18.12.</h4>
				<h4 class="display-1 museo">Villa Sibben Joulu&shy;lou&shy;nas</h4>
				<ul>
					<li><b>Alkupalapöytä</b></li>
					<li class="pb-2">
						Graavisiika, Savulohi, Kasvisterriini, Täytetyt kananmunat, Metsäsienisalaatti, Rosolli,
						Tomaatti-rucola-sipulisalaatti, Vihreä salaatti, Kylmäsavupossua, Sibben maksapaté,
						Sibben silli sekä Sibben leipä
					</li>
					<li><b>Lämmin pöytä</b></li>
					<li class="pb-2">
						Perinteiset laatikot, Wahlmanin Keitetty peruna, Joulukinkku sekä Sibben sinappia
					</li>
					<li><b>Jälkiruuaksi</b></li>
					<li class="pb-2">
						Jouluhalko, Joulutorttuja, Kolatun juustoja ja Sibben hilloa, Pipareita, Suklaata
					</li>
				</ul>
				<p>
					Varaa pöytä numerosta
					<a class="animate font-weight-bold" href="tel:+358504391925">0504391925</a>!
				</p>
				<h2>Kattauksen hinta 20/45 EUR</h2>
			</v-col>
			<v-col cols="12" md="4">
				<picture>
					<source :srcSet="images[0].webp.srcSet" type="image/webp" />
					<img
						:src="images[0].img.src"
						:srcSet="images[0].img.srcSet"
						:width="images[0].img.width"
						:height="images[0].img.height"
						:alt="images[0].alt"
						loading="lazy"
					/>
				</picture>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { IImage } from "@d/interfaces/images.interface"
/* eslint-disable import/no-duplicates */
import jouluImg1 from "@i/originals/events/joulu-1.jpg?sizes[]=300,sizes[]=600,sizes[]=800,sizes[]=1024"
import jouluWebp1 from "@i/originals/events/joulu-1.jpg?sizes[]=300,sizes[]=600,sizes[]=800,sizes[]=1024&format=webp"
import jouluImg2 from "@i/originals/events/joulu-2.jpg?sizes[]=300,sizes[]=600,sizes[]=800,sizes[]=1024"
import jouluWebp2 from "@i/originals/events/joulu-2.jpg?sizes[]=300,sizes[]=600,sizes[]=800,sizes[]=1024&format=webp"
import Vue from "vue"

const images: Array<IImage> = [
	{
		img: jouluImg1,
		webp: jouluWebp1,
		alt: "Joulu"
	},
	{
		img: jouluImg2,
		webp: jouluWebp2,
		alt: "Joulu"
	}
]

export default Vue.extend({
	name: "Joulu",
	data() {
		return {
			images: images as Array<IImage>
		}
	}
})
</script>
<style lang="scss" scoped>
.closed {
	color: $color2;
}
.open {
	color: $color3;
}
</style>
