<template>
	<div class="text-center">
		<Header :images="headerImages" />
		<v-container fluid>
			<v-row
				class="half-quart-height"
				:class="{
					'mb-16': $vuetify.breakpoint.xsOnly,
				}"
				align="center"
				justify="center"
			>
				<v-col cols="12" class="green-on-light pb-16 pt-16">
					<h3
						class="font-italic"
						:class="{
							'display-1': $vuetify.breakpoint.xs,
							'display-2': $vuetify.breakpoint.sm,
							'display-3': $vuetify.breakpoint.mdAndUp,
						}"
					>
						Luonto, meri, lähimatkailu, frisbeegolf, uinti sekä suppailu.
					</h3>
				</v-col>
			</v-row>
			<v-row data-aos="fade-up" class="light-on-green pt-16 pb-16" align="center" justify="center">
				<v-col cols="12">
					<a
						href="https://www.joensuuntila.fi/"
						class="animate color-light"
						rel="noopener noreferrer"
					>
						<h3 class="museo pb-16 museo-heading">Joensuun tila</h3></a
					>
				</v-col>
				<v-col cols="12" md="4">
					<p>
						<b>Villa Sibbe</b> on osa Joensuun tilan kartanomiljöötä, jonka ympärille rakentuu
						meidän oman
						<router-link to="accommodation.html" class="animate color-light"
							><b>majoitus-</b></router-link
						>
						<router-link to="restaurant.html" class="animate color-light"
							><b>ravintola</b></router-link
						>,
						<!--
            <router-link to="festivity.html" class="animate color-light"><b>juhlatila</b></router-link>,
            -->
						sekä
						<router-link to="cafe.html" class="animate color-light"><b>kahvila</b></router-link
						>toiminnan lisäksi:
						<br />
						<br />
						<a
							href="https://sibbediscgolf.fi/"
							class="animate color-light"
							rel="noopener noreferrer"
							><b>Frisbeegolf</b></a
						>,
						<a href="https://www.joensuuntila.fi/venesatama/" class="animate color-light"
							><b>venesatama</b></a
						>,

						<a href="https://www.joensuuntila.fi/aktiviteetit/" class="animate color-light"
							><b>uinti, suppaus, beach volley sekä veneily</b></a
						>
						aktiiviteetit.
						<br />
						<br />
						<a href="https://www.joensuuntila.fi/caravan/" class="animate color-light"
							><b>Karavaanialue</b></a
						>
						<br />
						<br />
						<a href="https://boathouse.fi/" class="animate color-light" rel="noopener noreferrer"
							><b>Andy's Boathouse</b></a
						>
						venehuolto- ja telakointipalvelut sekä
						<br />
						<a href="https://poco.fi/" class="animate color-light" rel="noopener noreferrer"
							><b>Poco musiikkipäiväkoti</b></a
						>.
					</p>
				</v-col>
				<v-col cols="12" md="8">
					<a
						href="https://www.joensuuntila.fi/"
						class="animate color-light"
						rel="noopener noreferrer"
					>
						<picture>
							<source :srcSet="joensuuntila.webp.srcSet" type="image/webp" />
							<img
								class="header"
								:src="joensuuntila.img.src"
								:srcSet="joensuuntila.img.srcSet"
								:width="joensuuntila.width"
								:height="joensuuntila.img.height"
								:alt="joensuuntila.alt"
								loading="lazy"
							/>
						</picture>
						<img src="img/recreation/joensuun-tila.png" style="width: 200px" />
					</a>
				</v-col>
			</v-row>
			<v-lazy>
				<v-row
					data-aos="fade-up"
					class="dark-on-yellow pt-16 pb-16"
					align="center"
					justify="center"
				>
					<v-col cols="12">
						<h3 class="museo pb-16 museo-heading">Lähimat&shy;kai&shy;lu</h3>
					</v-col>
					<v-col cols="12" md="6" class="full-height">
						<h4 class="display-1 museo pb-10">
							<a class="museo animate color-dark museo">Visit Sipoo</a>
						</h4>
						<p>
							Nauti luonnon rauhasta Sipoonkorven kansallispuistossa tai ratsasta aaltoilevien
							viljapeltojen keskellä. Aisti Sipoon vanhan kirkon keskiaikainen tunnelma ja uppoudu
							ainutlaatuiseen kulttuurimaisemaan, jonka vanha kirkko ja Sipoon uusgoottilainen
							kirkko luovat yhdessä. Tai kulje entisen Nikkilän mielisairaalan vanhojen rakennusten
							lomassa reiteillä, joita tuhannet potilaat ovat tallanneet.
						</p>
						<p>
							Nauti konserteista, taidenäyttelyistä tai omaleimaisista kylätapahtumista. Tee
							ostoksia pikkuputiikeissa ja erikoisliikkeissä.
						</p>
						<a href="https://www.sipoo.fi/visit-sipoo/" rel="noopener noreferrer">
							<img
								class="pt-16 pb-10"
								:src="sipooLogo.image"
								:alt="sipooLogo.alt"
								:style="sipooLogo.imageMaxWidth"
						/></a>
					</v-col>
					<v-col cols="12" md="6" class="full-height">
						<h4 class="display-1 museo pb-10">
							<a
								class="animate color-dark museo"
								href="https://www.luontoon.fi/sipoonkorpi"
								rel="noopener noreferrer"
								>Sipoonkorpi</a
							>
						</h4>
						<p>
							Sipoonkorven kansallispuisto sijaitsee alueella, jolla jääkauden muokkausvoimat
							myllersivät aikanaan maa- ja kallioperää. Kansallispuiston metsiin kätkeytyy lukuisia
							mielenkiintoisia geologisia muodostumia, jotka kutsuvat retkeilijää kurkistamaan aina
							seuraavan kallionseinämän taakse.
						</p>
						<div style="position: relative">
							<picture>
								<source :srcSet="sipoonkorpi.webp.srcSet" type="image/webp" />
								<img
									:src="sipoonkorpi.img.src"
									:srcSet="sipoonkorpi.img.srcSet"
									:width="sipoonkorpi.img.width"
									:height="sipoonkorpi.img.height"
									:alt="sipoonkorpi.alt"
									loading="lazy"
								/>
							</picture>
							<div class="color-light image-with-author">
								&copy;
								<a :href="sipoonkorpi.author.url" rel="noopener noreferrer">{{
									sipoonkorpi.author.name
								}}</a>
							</div>
						</div>
						<p>
							Suuret korkeusvaihtelut ja muodokas kalliomaasto synnyttävät monipuolisia
							elinympäristöjä eliölajeille. Kallion notkelmassa varjoisella sammalseinämällä
							viihtyvät aivan erilaiset kasvit, hyönteiset ja sienet, kuin paljaan ja tuulisen
							kallionlaen jäkäliköissä.
						</p>
					</v-col>
					<v-col cols="12" md="6" class="full-height">
						<h4 class="display-1 museo pb-10">
							<a
								class="animate color-dark museo"
								href="https://www.sipoo.fi/palvelu/saariston-virkistysalueet/"
								rel="noopener noreferrer"
								>Saaristo</a
							>
						</h4>
						<p>
							Sipoon saaristo tarjoaa lukemattomia mahdollisuuksia päiväretkille. Kauniit maisemat
							kirkkaine vesineen ja rauhallisine rantoineen luovat upeat puitteet veneilylle,
							kalastukselle, melonnalle ja retkeilylle.
						</p>
						<div style="position: relative">
							<picture>
								<source :srcSet="norrkulla.webp.srcSet" type="image/webp" />
								<img
									:src="norrkulla.img.src"
									:srcSet="norrkulla.img.srcSet"
									:width="norrkulla.img.width"
									:height="norrkulla.img.height"
									:alt="norrkulla.alt"
									loading="lazy"
								/>
							</picture>
							<div class="color-light image-with-author">
								&copy;
								<a :href="norrkulla.author.url" rel="noopener noreferrer">{{
									norrkulla.author.name
								}}</a>
							</div>
						</div>
					</v-col>
					<v-col cols="12" md="6" class="full-height">
						<h4 class="display-1 museo pb-10">Lisätietoa</h4>
						<p>
							<a
								class="animate color-dark"
								href="https://www.sipoo.fi/palvelu/saariston-virkistysalueet/"
								rel="noopener noreferrer"
								><b>Sipoon saariston virkistysalueet</b></a
							>
						</p>
						<p>
							<a
								class="animate color-dark"
								href="https://www.sipoo.fi/wp-content/uploads/2020/12/saaristokartta_2020.pdf"
								rel="noopener noreferrer"
								><b> Saaristokartta </b>
							</a>
							, jos linkki on vanhentunut niin voit vaihtoehtoisesti hakea saman
							<a
								class="animate color-dark"
								href="https://www.google.com/search?q=Sipoon+saaristokartta"
								rel="noopener noreferrer"
								><b>Googlen avulla</b></a
							>.
						</p>
						<p>
							<a
								class="animate color-dark"
								href="http://www.portoline.net/fi/aikataulut-sipoo"
								rel="noopener noreferrer"
								><b> Yhteysalusten aikataulut </b>
							</a>
							. Liikennöijä vaihtuu Tammikuussa 2022, joten jos linkki ei toimi käytä
							<a
								class="animate color-dark"
								href="https://www.google.com/search?q=sipoo+yhteysalus"
								rel="noopener noreferrer"
								><b>Googlen hakua</b></a
							>, kunnes saamme linkin taas päivitettyä.
						</p>
					</v-col>
				</v-row>
			</v-lazy>
			<v-lazy>
				<v-row data-aos="fade-up" class="light-on-red pt-16 pb-16" align="center" justify="center">
					<v-col cols="12">
						<h3 class="museo museo-heading">
							<a
								href="https://sibbediscgolf.fi/"
								class="animate color-light"
								rel="noopener noreferrer"
								>Frisbee&shy;golf</a
							>
						</h3>
					</v-col>
					<v-col cols="3" md="2">
						<a
							href="https://sibbediscgolf.fi/"
							class="animate color-light"
							rel="noopener noreferrer"
						>
							<img
								:src="discgolfLogo.image"
								:alt="discgolfLogo.alt"
								:style="discgolfLogo.imageMaxWidth"
						/></a>
					</v-col>
					<v-col cols="9" md="10">
						<h4 class="display-1 museo">
							Rata, jonka vuoksi pelaajat halua&shy;vat matkus&shy;taa.
						</h4>
					</v-col>
					<v-col cols="12" md="6" lg="4">
						<p>
							<a
								href="https://sibbediscgolf.fi/"
								class="animate color-light"
								rel="noopener noreferrer"
								><b>Sibbe Disc Golf</b>
							</a>
							tarjoaa alueella kaksi jatkuvasti ylläpidettyä ja kehittyvää frisbeegolfrataa. Radat
							ovat suunniteltu palvelemaan jokaista heittäjää innostuneesta harrastelijasta
							ammattilaiseen.
						</p>
						<p>
							Kahdesta täysimittaisesta radasta vaikeampi haastaa jopa parhaista parhaat. Juuri
							tämän takia Sibbe on saanut kunnian toimia areenana maailman parhaille pelaajille aina
							uudestaan ja uudestaan. Vuosittainen päätapahtuma Tyyni on Euroopan suurin
							frisbeegolfkilpailu.
						</p>
					</v-col>
					<v-col cols="12" md="6" lg="4">
						<p>
							Näiltä vakituisen ratamestarin rakkaudella hoitamilta pelikentiltä löytyy
							monipuolisuutta, valokuvauksellisia maisemia, ammattimaista ratasuunnittelua ja
							tietysti mahdollisuus hyötyliikunnalle sen parhaimmassa muodossa.
						</p>
						<p>
							Jos sinulle on ehtinyt muodostua oma suosikkiheittosi, täällä pääset sen esittämään.
							Väylät tarjoavat avointa heittoa niityillä, pitkää liidätystä alamäkeen, tarkkuutta
							vaativaa metsäreittiä ja kaikkea siltä väliltä.
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<p>
							<b>Villassa majoittuvien avain käy pelilippuna kahdelle hengelle!</b>
							Sibbe Disc Golfin toimintaan kuuluu myös huhtikuusta elokuuhun palveleva
							<a
								href="https://sibbediscgolf.fi/hinnasto/"
								class="animate color-light"
								rel="noopener noreferrer"
								><b>Pro Shop</b></a
							>.
						</p>
					</v-col>
					<v-col cols="12" class="pa-0 ma-0 pt-16 pb-16">
						<Carousel :images="carouselImages" />
					</v-col>
				</v-row>
			</v-lazy>
			<v-lazy>
				<v-row class="text-center light-on-dark pt-16 pb-16">
					<v-col cols="12">
						<h3 class="museo museo-heading">
							<a
								href="https://www.joensuuntila.fi/aktiviteetit/"
								class="animate color-light"
								rel="noopener noreferrer"
								>Aktiviteetit</a
							>
						</h3>
					</v-col>
					<v-col cols="12" md="6" lg="4">
						<h4 class="display-1 museo pt-10 pb-5">Uimajärvi</h4>
						<picture>
							<source :srcSet="uimajarvi.webp.srcSet" type="image/webp" />
							<img
								:src="uimajarvi.img.src"
								:srcSet="uimajarvi.img.srcSet"
								:width="uimajarvi.img.width"
								:height="uimajarvi.img.height"
								:alt="uimajarvi.alt"
								loading="lazy"
							/>
						</picture>
						<p>
							Joensuun Tilan alueelta löytyy uimajärvi, jossa on hiekkarantaa n. 300 metriä ja laaja
							nurmialue pihaleikkejä ja pelejä varten.
						</p>
					</v-col>
					<v-col cols="12" md="6" lg="4">
						<h4 class="display-1 museo pt-10 pb-5">SUP-laudat</h4>
						<p>
							Joensuun Tila vuokraa myös SUP-lautoja omatoimiseen suppailuun. Voit kokeilla
							suppailua turvallisesti uimajärvellämme tai jos olet kokenut suppailija, voit lähteä
							avovesille.
						</p>
						<picture>
							<source :srcSet="suppailu.webp.srcSet" type="image/webp" />
							<img
								:src="suppailu.img.src"
								:srcSet="suppailu.img.srcSet"
								:width="suppailu.img.width"
								:height="suppailu.img.height"
								:alt="suppailu.alt"
								loading="lazy"
							/>
						</picture>
					</v-col>
					<v-col cols="12" md="6" lg="4">
						<h4 class="display-1 museo pt-10 pb-5">Beach Volley</h4>
						<picture>
							<source :srcSet="beachvolley.webp.srcSet" type="image/webp" />
							<img
								:src="beachvolley.img.src"
								:srcSet="beachvolley.img.srcSet"
								:width="beachvolley.img.width"
								:height="beachvolley.img.height"
								:alt="beachvolley.alt"
								loading="lazy"
							/>
						</picture>
						<p>Beach volley -kenttä on asiakkaidemme vapaassa käytössä.</p>
					</v-col>
					<v-col cols="12" md="6" lg="6">
						<h4 class="display-1 museo pt-10 pb-5">
							Kajakki- ja pien&shy;ve&shy;ne&shy;vuok&shy;ra&shy;us
						</h4>
						<p>
							Joensuun Tilalla pääset myös kokeilemaan melontaa. Ensikertalaiset voivat kokeilla
							kajakkeja turvallisesti uimajärvessä ja kokeneemmat melojat voivat lähteä jokea pitkin
							avovesille.
						</p>
						<p>
							Venevuokraus: Soutuvene Marino ja 4hv perämoottori. Venettä voi käyttää joko
							moottorilla tai pelkästään soutuveneenä
						</p>
						<picture>
							<source :srcSet="venevuokraus.webp.srcSet" type="image/webp" />
							<img
								:src="venevuokraus.img.src"
								:srcSet="venevuokraus.img.srcSet"
								:width="venevuokraus.img.width"
								:height="venevuokraus.img.height"
								:alt="venevuokraus.alt"
								loading="lazy"
							/>
						</picture>
					</v-col>
					<v-col cols="12" md="6" lg="6">
						<h4 class="display-1 museo pt-10 pb-5">
							<a
								href="https://www.joensuuntila.fi/aktiviteetit/"
								class="animate color-light"
								rel="noopener noreferrer"
							>
								Lisätietoa sekä varaukset Joensuun Tilan sivustolta</a
							>.
						</h4>
					</v-col>
				</v-row>
			</v-lazy>
		</v-container>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

import Carousel from "@c/Carousel.vue";

import { recreation as metaData } from "@h/metaData";

import Header from "@c/Header.vue";
import {
	recreationHeaderImages as headerImages,
	recreationImages as images,
	recreationCarouselImages as carouselImages,
} from "@d/recreation/recreation.images";

import sipooLogo from "@i/originals/recreation/sipoo-logo.svg";

import { IImage } from "@d/interfaces/images.interface";

const {
	joensuuntila,
	sipoonkorpi,
	norrkulla,
	suppailu,
	beachvolley,
	uimajarvi,
	venevuokraus,
} = images;
export default Vue.extend({
	name: "Recreation",
	metaInfo: { ...metaData },
	components: { Header, Carousel },
	data(): {
		headerImages: Record<string, IImage>;
		carouselImages: Record<string, Array<IImage>>;
		joensuuntila: IImage;
		sipoonkorpi: IImage;
		norrkulla: IImage;
		sipooLogo: { image: string; imageMaxWidth: string; alt: string };
		discgolfLogo: { image: string; imageMaxWidth: string; alt: string };
		suppailu: IImage;
		beachvolley: IImage;
		uimajarvi: IImage;
		venevuokraus: IImage;
	} {
		return {
			headerImages: headerImages,
			carouselImages: carouselImages,
			joensuuntila: joensuuntila,
			sipoonkorpi: sipoonkorpi,
			norrkulla: norrkulla,
			sipooLogo: {
				image: sipooLogo,
				imageMaxWidth: "width: 10em;",
				alt: "Löfbergs logo",
			},
			discgolfLogo: {
				image: "/img/recreation/sibbe-disc-golf-logo.png",
				imageMaxWidth: "width: 5em;",
				alt: "Sibbe Disc Golf",
			},
			suppailu: suppailu,
			beachvolley: beachvolley,
			uimajarvi: uimajarvi,
			venevuokraus: venevuokraus,
		};
	},
	mounted(): void {
		console.log("👽 Recreation mounted!");
	},
});
</script>
<style lang="scss" scoped>
.image-with-author {
	position: absolute;
	bottom: 0.5em;
	right: 0.5em;
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
