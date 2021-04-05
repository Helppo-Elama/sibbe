import { MetaInfo, MetaPropertyName, MetaPropertyProperty } from "vue-meta";

const ogType: MetaPropertyProperty = {
	property: "og:type",
	content: "website",
};

const twitterCard: MetaPropertyProperty = {
	property: "twitter:card",
	content: "summary_large_image",
};

let args = {};

//PARSER
function parse(args: Record<string, string>): MetaInfo {
	const { title, description, socialImage, url } = args;
	return {
		//MAIN
		title: title,
		meta: [
			{
				name: "description",
				content: description,
			} as MetaPropertyName,

			//FACEBOOK
			ogType,
			{
				property: "og:url",
				content: url,
			},
			{
				property: "og:title",
				content: title,
			},
			{
				property: "og:descrtiption",
				content: description,
			},
			{
				property: "og:image",
				content: socialImage,
			},

			//TWITTER
			twitterCard,

			{
				property: "twitter:url",
				content: homeUrl,
			},
			{
				property: "twitter:title",
				content: title,
			},
			{
				property: "twitter:description",
				content: description,
			},
			{
				property: "twitter:image",
				content: socialImage,
			},
		],
	};
}

//HOME
const homeUrl = "https://sibbe.fi";
args = {
	title: "Villa Sibbe Majoitu, kokousta ja viihdy tammipuiden suojassa",
	description:
		"Tarjoamme hienot puitteet rauhallisen vehreän ympäristön keskeltä. Tule yöpymään, kokoustamaan tai muuten vaan viihtymään kanssamme.",
	socialImage: "https://sibbe.fi/img/social/villa-sibbe-social.jpg",
	url: homeUrl,
};
const home = parse(args);

//ACCOMMODATION
const accommodationUrl = homeUrl + "/accommodation.html";
args = {
	title: "Villa Sibbe Majoitu tammipuiden suojassa kauniissa huoneissa",
	description:
		"Kauniit hotellitasoiset huoneemme, laadukkaat sängyt, rauhallinen vehreä ympäristö sekä vanhan kartanon henki takaavat mukavat ja pitkät yöunet.",
	socialImage: "https://sibbe.fi/img/social/accommodation-sibbe-social.jpg",
	url: accommodationUrl,
};
const accommodation = parse(args);

//CONFERENCE
const conferenceUrl = homeUrl + "/conference.html";
args = {
	title: "Villa Sibbe Kokousta ja viihdy tammipuiden suojassa",
	description:
		"Intiimiin ja te­hok­kaa­seen ko­kous­ta­mi­seen No­bel -pal­ki­tun kek­si­jän ta­paan.",
	socialImage: "https://sibbe.fi/img/social/conference-sibbe-social.jpg",
	url: conferenceUrl,
};
const conference = parse(args);

//BOOKING
const bookingUrl = homeUrl + "/booking.html";
args = {
	title: "Villa Sibbe Majoitus, tarkista saatavuus ja varaa huone",
	description: "Joensuun raitti 58 01150, Söderkulla, +358 50 4391925",
	socialImage: "https://sibbe.fi/img/social/accommodation-villa-sibbe-social.jpg",
	url: bookingUrl,
};
const booking = parse(args);

//CONTACT
const contactUrl = homeUrl + "/contact.html";
args = {
	title: "Villa Sibbe yritystiedot, kartta sekä yhteydenottolomake",
	description: "Joensuun raitti 58 01150, Söderkulla, +358 50 4391925",
	socialImage: "https://sibbe.fi/img/social/villa-sibbe-social.jpg",
	url: contactUrl,
};
const contact = parse(args);

//CAFE
const cafeUrl = homeUrl + "/cafe.html";
args = {
	title: "Café Sibbe: Makeaa, suolaista, kahvia ja virvokkeita rannalla.",
	description:
		"Kotoisa rantakahvila Joensuun Tilan satamassa Sipoossa. Vieressä aktiviteetteja moneen makuun. Tule viihtymään kanssamme pidemmäksikin aikaa!",
	socialImage: "https://sibbe.fi/img/social/cafe-sibbe-social.jpg",
	url: cafeUrl,
};
const cafe = parse(args);

//RESTAURANT
const restaurantUrl = homeUrl + "/restaurant.html";
args = {
	title: "Avaamme vuoden 2021 aikana ravintolatoimintaa",
	description: "Villa Sibbe tulee tarjoamaan laadukasta lounasta sekä ruokaa listalta.",
	socialImage: "https://sibbe.fi/img/social/restaurant-sibbe-social.jpg",
	url: restaurantUrl,
};
const restaurant = parse(args);

//FESTIVITY
const festivityUrl = homeUrl + "/festivity.html";
args = {
	title: "",
	description: "",
	socialImage: "https://sibbe.fi/img/social/festivity-sibbe-social.jpg",
	url: festivityUrl,
};
const festivity = parse(args);

//RECREATION
const recreationUrl = homeUrl + "/recreation.html";
args = {
	title: "Villa Sibbe Luonto, meri, frisbeegolf, uinti sekä lähimatkailu",
	description:
		"Hyvät puitteet harrastamiseen sekä lähimatkailuun. Koe Sipoon saaristo ja luonto tai rentoudu harrastusten parissa",
	socialImage: "https://sibbe.fi/img/social/recreation-sibbe-social.jpg",
	url: recreationUrl,
};
const recreation = parse(args);

export {
	home,
	accommodation,
	conference,
	booking,
	contact,
	cafe,
	restaurant,
	festivity,
	recreation,
};
