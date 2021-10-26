<template>
	<v-container fluid class="pa-0 ma-0">
		<v-row class="ma-0" align="center" justify="center">
			<v-col cols="12" md="8">
				<h4 class="museo">La 13.11. - Su 14.11.</h4>
				<h4 class="display-1 museo">Isän&shy;päivä&shy;kat&shy;taus</h4>
				<ul>
					<li><b>Alkuun</b></li>
					<li class="pb-2">Lasillinen limonadia tai kuohuviiniä</li>
					<li><b>Alkupalapöytä</b></li>
					<li class="pb-2">
						Marinoidut kasvikset, Lohichevice , Rosépaisti &amp; piparjuurikerma, Sibben
						perunasalaatti, Tomaatti-sipulisalaatti, Täytetyt kananmunat sekä Vihersalaatti
					</li>
					<li><b>Pääruokavaihtoehdot</b></li>
					<li class="pb-1">Kasvispihvit, yrttiriisi, tahinikastike</li>
					<li class="pb-1">Lihapullat, perunamuusi (lapsille 2-12 v.)</li>
					<li class="pb-1">Miedosti savustettu lohi, Wahlmanin perunat, valkoviinikastike</li>
					<li class="pb-2">Mureaa naudanrintaa, valkosipuliperunat, punaviinikastike</li>
					<li><b>Jälkiruuaksi</b></li>
					<li>Täytekakku, kahvi, tee, mehu</li>
				</ul>
				<p>
					Varaa pöytä numerosta
					<a class="animate font-weight-bold" href="tel:+358504391925">0504391925</a>!
				</p>
				<p>
					Kattaukset Isänpäivän viikonloppuna lauantaina sekä sunnuntaina klo <b>12:00</b> ja
					<b>15:00</b>.
				</p>
				<h2>Kattauksen hinta 20/43 EUR</h2>
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
import isanpaivaImg1 from "@i/originals/events/isanpaiva-1.jpg?sizes[]=300,sizes[]=600,sizes[]=800,sizes[]=1024"
import isanpaivaWebp1 from "@i/originals/events/isanpaiva-1.jpg?sizes[]=300,sizes[]=600,sizes[]=800,sizes[]=1024&format=webp"
import Vue from "vue"

const images: Array<IImage> = [
	{
		img: isanpaivaImg1,
		webp: isanpaivaWebp1,
		alt: "Isänpäivä"
	}
]

export default Vue.extend({
	name: "Isanpaiva",
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
