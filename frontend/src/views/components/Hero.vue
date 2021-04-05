<template>
	<v-row>
		<v-col cols="12" md="4" data-aos="fade-up" class="light-on-green full-height pt-16 pb-16">
			<div class="mt-minus-4-em">
				<font-awesome-layers class="mb-15 fa-10x">
					<router-link
						aria-label="Majoitu"
						to="/accommodation.html"
						id="fa-bed"
						class="animate color-light"
					>
						<font-awesome-icon icon="circle" transform="grow-8" ref="fa-bed" />
						<font-awesome-icon icon="circle" transform="grow-7" class="color-green" />
						<font-awesome-icon
							icon="bed"
							transform="shrink-7 left-2"
							@mouseover="faHoverStyle('fa-bed')"
							@mouseout="faNormalStyle('fa-bed')"
							@click="faClickStyle('fa-bed')"
						/>
					</router-link>
				</font-awesome-layers>
			</div>
			<router-link to="/accommodation.html" class="animate color-light">
				<h3 class="museo museo-heading pt-16 pb-16">Majoitu</h3>
			</router-link>
			<p class="pl-10 pr-10">
				Villa Sibbe on Nobelisti A.I Virtasen koetilan päärakennus, jossa AIV kestitsi ja majoitti
				vieraitaan. Täällä voit todella tuntea historian huminaa!
				<br /><br />
				Vastaremontoidut kauniit hotellitasoiset huoneemme, laadukkaat sängyt, rauhallinen ympäristö
				sekä vanhan kartanon henki takaavat mukavat ja pitkät yöunet.
				<br />
				<br />
				Lähellä oleva luonto tarjoaa mahtavat puitteet ulkoiluun ja virkistäytymiseen. Varaa oma
				majoituksesi vanhojen tammipuiden suojista maukkaan aamupalan kera. Virkistäydy välillä
				täysimittaisella kilpatason frisbeegolfradallamme tai käy uimajärvessä uimassa.
			</p>
		</v-col>
		<v-col cols="12" md="4" data-aos="fade-up" class="dark-on-yellow full-height pt-16 pb-16">
			<div class="mt-minus-4-em">
				<font-awesome-layers class="mb-15 fa-10x">
					<router-link
						aria-label="Kokousta"
						to="/conference.html"
						id="fa-users"
						class="animate color-dark"
					>
						<font-awesome-icon icon="circle" ref="fa-users" transform="grow-8" />
						<font-awesome-icon icon="circle" transform="grow-7" class="color-yellow" />
						<font-awesome-icon
							icon="users"
							transform="shrink-7, left-2"
							@mouseover="faHoverStyle('fa-users')"
							@mouseout="faNormalStyle('fa-users')"
							@click="faClickStyle('fa-users')"
						/>
					</router-link>
				</font-awesome-layers>
				<router-link to="/conference.html" class="animate color-dark">
					<h3 class="museo museo-heading pt-16 pb-16">Kokousta</h3>
				</router-link>
				<p class="pl-10 pr-10">
					Sibben intiimit kokous- sekä juhlatilat: Tehokkaaseen kokoustamiseen.
					<br /><br />
					Villa Sibben kokoustilat ovat oiva valinta pienille, alle 20 hengen kokousryhmille.
					Tarjoamme kokouspäivänä maittavan aamiaisen, lounaan ja kahvit.
					<br /><br />
					Pidempiä kokousrupeamia helpottaa paikan päällä tarjoiltu, illallinen sekä majoittuminen
					samassa rakennuksessa vain muutaman askeleen päässä.
					<br /><br />
					Löytyykö teidän yrityksestäsi seuraava nobelisti?
				</p>
			</div>
		</v-col>
		<v-col cols="12" md="4" data-aos="fade-up" class="light-on-red full-height pt-16 pb-16">
			<div class="mt-minus-4-em">
				<font-awesome-layers class="mb-15 fa-10x animate color-light">
					<router-link
						aria-label="Virkisty"
						to="/recreation.html"
						id="fa-heart"
						class="animate color-light"
					>
						<font-awesome-icon icon="circle" transform="grow-8" />
						<font-awesome-icon icon="circle" transform="grow-7" class="color-red" />
						<font-awesome-icon
							icon="heart"
							transform="shrink-7"
							@mouseover="faHoverStyle('fa-heart')"
							@mouseout="faNormalStyle('fa-heart')"
							@click="faClickStyle('fa-heart')"
						/>
					</router-link>
				</font-awesome-layers>
				<router-link to="/recreation.html" class="animate color-light">
					<h3 class="museo museo-heading pt-16 pb-16">Virkisty</h3>
				</router-link>
				<p class="pl-10 pr-10">
					Kesällä juhla- ja kokoustilana toimii aitta, jossa pääset aistimaan vanhaa
					maalaismiljöötä. Aitassa järjestät sujuvasti pienet tunnelmalliset kokoukset, rapujuhlat
					sekä syntymäpäivät.
					<br /><br />
					Villa Sibben välittömässä läheisyydessä on 23-väyläinen kilpatason frisbeegolfrata,
					keinotekoinen puhdasvetinen uimajärvi, melonta- ja SUP-mahdollisuus sekä uimajärvessä että
					Sipoonjoella.
					<br /><br />
					Kiinteiden palveluiden lisäksi yhteis&shy;työkump&shy;paneidemme kanssa tarjoamme
					monipuolisen kattauksen erilaisia aktiviteetteja ja virkistysmahdollisuuksia
				</p>
			</div>
		</v-col>
	</v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faUsers, faBed, faHeart, faCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faUsers, faBed, faHeart, faCircle);

const Hero = Vue.extend({
	name: "Hero",
	mounted(): void {
		console.log("🦺 Hero mounted!");
	},
	methods: {
		faHoverStyle(el: string) {
			(this.$refs[el] as SVGElement).classList.add(el + "-circle-hover");
		},
		faNormalStyle(el: string) {
			(this.$refs[el] as SVGElement).classList.remove(el + "-circle-hover");
		},
		faClickStyle(el: string) {
			(this.$refs[el] as SVGElement).classList.add(el + "-circle-clicked");
		},
	},
});
export default Hero;
</script>
<style lang="scss" scoped>
.fa-bed:hover,
.fa-bed:active {
	color: $color4;
}
.fa-bed-circle-hover {
	color: $color4;
}

.fa-bed-circle-clicked {
	color: $color4;
}

.fa-users:hover,
.fa-users:active {
	color: $color2;
}
.fa-users-circle-hover {
	color: $color2;
}
.fa-users-circle-hover-clicked {
	color: $color2;
}

.fa-heart:hover,
.fa-heart:active {
	color: $color4;
}
.fa-heart-circle-hover {
	color: $color4;
}

.fa-heart-circle-clicked {
	color: $color4;
}
.animate > svg {
	transition: all 0.5s ease-in-out 0s;
}
</style>
