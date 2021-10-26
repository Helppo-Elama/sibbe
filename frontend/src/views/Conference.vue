<template>
	<div class="text-center">
		<Header :images="headerImages" />
		<v-container fluid>
			<v-row class="green-on-light half-quart-height pt-16 pb-16" align="center" justify="center">
				<v-col cols="12">
					<h3
						class="font-italic"
						:class="{
							'display-1': $vuetify.breakpoint.xs,
							'display-2': $vuetify.breakpoint.sm,
							'display-3': $vuetify.breakpoint.mdAndUp
						}"
					>
						Intiimiin ja te&shy;hok&shy;kaa&shy;seen ko&shy;kous&shy;ta&shy;mi&shy;seen No&shy;bel
						-pal&shy;ki&shy;tun kek&shy;si&shy;jän ta&shy;paan.
					</h3>
				</v-col>
			</v-row>
			<v-row data-aos="fade-up" class="light-on-green pt-16" align="center" justify="center">
				<v-col cols="12">
					<h3 class="museo pb-16 museo-heading">Kokoustilat</h3>
				</v-col>
				<v-col cols="12" md="8" class="pt-16 pb-16">
					<p>
						Villa Sibbe on aito kotikartano, jossa pääset ideoimaan rauhallisessa maalaismiljöössä.
						Se on myös nobelisti A.I. Virtasen etinen koti jossa hän on kestinyt vieraitaan
						valtionjohtoa myöten.
						<br /><br />
						Alue on toiminut Virtasen inspiraation lähteenä niin Nobelilla palkittuihin keksintöihin
						kuin muihinkin tärkeisiin innovaatioihin.
						<br /><br />
						Kokoustilat ovat oiva valinta pienille, alle 20 hengen kokousryhmille. Kokouspakettiin
						kuuluu kahvit maistuvien tarjoilujen kera. Pidempiä kokousrupeamia helpottaa paikan
						päällä tarjoiltu, huipputason illallinen lähiruoasta sekä tietysti majoittuminen samassa
						rakennuksessa, muutaman askeleen päässä kokouspöydästä.
					</p>
				</v-col>
				<v-col cols="12" md="4">
					<div style="position: relative">
						<picture>
							<source :srcSet="one.webp.srcSet" type="image/webp" />
							<img
								class="header"
								:src="one.img.src"
								:srcSet="one.img.srcSet"
								:width="one.img.width"
								:height="one.img.height"
								:alt="one.alt"
								loading="lazy"
							/>
						</picture>
						<div v-if="one.author" class="color-light image-with-author">
							&copy;
							<a :href="one.author.url" rel="noopener noreferrer">{{ one.author.name }}</a>
						</div>
					</div>
				</v-col>
			</v-row>
			<v-row
				data-aos="fade-up"
				class="dark-on-yellow quart-height pt-16 pb-16"
				align="center"
				justify="center"
			>
				<v-col cols="12">
					<h3 class="museo pb-16 museo-heading">Palvelut</h3>
				</v-col>
				<v-col cols="12" md="6">
					<div style="position: relative">
						<picture>
							<source :srcSet="two.webp.srcSet" type="image/webp" />
							<img
								class="header"
								:src="two.img.src"
								:srcSet="two.img.srcSet"
								:width="two.width"
								:height="two.img.height"
								:alt="two.alt"
								loading="lazy"
							/>
						</picture>
						<div v-if="two.author" class="color-light image-with-author">
							&copy;
							<a :href="two.author.url" rel="noopener noreferrer">{{ two.author.name }}</a>
						</div>
					</div>
				</v-col>
				<v-col cols="12" md="6">
					<p>
						Kokousten lomassa on kaikki Villa Sibben ja alueen muut palvelut lähelläsi, virkistäydy
						välillä kartanon piha-alueella, täysimittaisella frisbeegolfradallamme, käy uimajärvessä
						uimassa tai vaikka moottorikelkkasafarilla.
						<br /><br />
						Villa Sibbe sijaitsee alueella joka on nobelisti A.I. Virtasen koetila, joten raikkaiden
						sekä mullistavien ideoiden keksiminen on täällä jo perinteissä. Löytyykö sinun
						yrityksestäsi seuraava nobelisti?
						<br /><br />
						Idyllinen mutta samalla mahtipontinen Villa Sibbe, joka on rakennettu vuonna 1741 ja
						sisältä täysin remontoitu 2016-2017, toimii ainutlaatuisena kokouspaikkana.
					</p>
				</v-col>
			</v-row>
			<v-row data-aos="fade-up" class="light-on-red half-height pt-16 pb-16">
				<v-col cols="12">
					<h3 class="museo pb-16 museo-heading">Tilat ja varustelu</h3>
					<p>
						Villa Sibbessä on 2 pääasiallista kokoustilaa joista löytyy tarvittavaa AV-tekniikkaa
						esityksiä varten. Lisäksi Villasta löytyy myös 1 ryhmätyötila Isäntä sekä pihapiirista
						idyllinen, wanhanajan henkeä pursuava Aitta. Kokousten perusvälineet kuten lehtiöt ja
						kynät, kuuluvat varusteluun joka tilassa.
					</p>
				</v-col>
			</v-row>
			<v-row class="text-center">
				<v-col class="ma-0 pa-0">
					<ConferenceList />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script lang="ts">
import ConferenceList from "@c/conference/ConferenceList.vue"
import Header from "@c/Header.vue"
import {
	conferenceHeaderImages as headerImages,
	conferenceImages as images
} from "@d/conference/conference.images"
import { IHeaderImages, IImage } from "@d/interfaces/images.interface"
import { conference as metaData } from "@h/metaData"
import Vue from "vue"

export default Vue.extend({
	name: "Conference",
	metaInfo: { ...metaData },
	components: { Header, ConferenceList },
	data(): { one: IImage; two: IImage; headerImages: IHeaderImages } {
		return {
			one: images.one,
			two: images.two,
			headerImages
		}
	}
})
</script>
<style lang="scss" scoped>
img {
	width: 100%;
	height: auto;
}
.image-with-author {
	position: absolute;
	bottom: 0.5em;
	right: 0.5em;
}
</style>
