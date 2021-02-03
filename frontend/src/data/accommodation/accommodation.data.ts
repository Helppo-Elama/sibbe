import {
  accommodationCarouselImages as images,
  accommodationImages,
  accommodationAdditionalImages as additionalImages,
} from "./accommodation.images";
import { IRooms } from "../interfaces/rooms.interface";

const accommodation: IRooms = {
  rooms: [
    {
      id: 0,
      htmlClass: "dark-on-yellow",
      breakpoints: { md: 6 },
      title: "Artturi",
      body:
        "Artturi on suurin huoneemme. Se on nimetty nobelistin itsensä mukaan.<br /><br />Lisämukavuuksina huoneessa on mukava nojatuoli, näkymä isosta ikkunasta kartanon puutarhaan ja erityisen tilava kylpyhuone.",
      equipments: [
        {
          title: "Parivuode tai kaksi yksittäistä sänkyä",
        },
        {
          title: "Lisävuodemahdollisuus",
        },
      ],
      images: images.artturi,
    },
    {
      id: 1,
      htmlClass: "light-on-red",
      breakpoints: { md: 6 },
      title: "Lilja",
      body:
        "Hurmaava huone kahdelle, lisävuodemahdollisuudella.<br /><br />Sängyn saa halutessaan parivuoteena tai erillisinä, yhden hengen vuoteina. Liljasta on näkyvyys kartanon pihapiiriin.",
      equipments: [
        {
          title: "Parivuode tai kaksi yksittäistä sänkyä",
        },
        {
          title: "Lisävuodemahdollisuus",
        },
      ],
      images: images.lilja,
    },
    {
      id: 2,
      title: "Kaarlo",
      htmlClass: "yellow-on-dark",
      breakpoints: { md: 7 },
      body:
        "Ihastuttava huone kahdelle, lisävuodemahdollisuudella.<br /><br />Sängyn saa halutessaan parivuoteena tai erillisinä, yhden hengen vuoteina.<br /><br />Kaarlosta avautuu hieno näkymä venesataman suuntaan.",
      equipments: [
        {
          title: "Parivuode tai kaksi yksittäistä sänkyä",
        },
        {
          title: "Lisävuodemahdollisuus",
        },
      ],
      images: images.kaarlo,
    },
    {
      id: 3,
      title: "Olavi",
      htmlClass: "green-on-light",
      breakpoints: { md: 5 },
      body:
        "Viehättävä huone kahdelle, lisävuodemahdollisuudella.<br /><br />Olavissa vain erilliset sängyt.<br /><br />Ikkunasta avautuu upea näkymä venesataman suuntaan.",
      equipments: [
        {
          title: "Lisävuodemahdollisuus",
        },
      ],
      images: images.olavi,
    },
    {
      id: 4,
      title: "Rico",
      htmlClass: "light-on-green",
      breakpoints: { md: 5 },
      body:
        "Kiehtova huone kahdelle, lisävuodemahdollisuudella.<br /><br />Sängyn saa halutessaan parivuoteena tai erillisinä, yhden hengen vuoteina.<br /><br />Ikkunasta avautuu näkymät kartanon pihapiiriin.",
      equipments: [
        {
          title: "Parivuode tai kaksi yksittäistä sänkyä",
        },
        {
          title: "Lisävuodemahdollisuus",
        },
      ],
      images: images.rico,
    },
    {
      id: 5,
      title: "Isäntä",
      htmlClass: "dark-on-yellow",
      breakpoints: { md: 7 },
      body:
        "Kiehtova huone jopa kolmelle hengelle kotikartanon alakerrassa.<br /><br />Sängyn saa halutessaan parivuoteena tai erillisinä, yhden hengen vuoteina. Ikkunasta avautuu näkymät kartanon pihapiiriin.<br /><br />Muista huoneista poiketen, Isännässä ei ole omaa kylpyhuonetta vaan käytössä on alakerran jaetut WC:t sekä suihku.",
      equipments: [
        {
          title: "Parivuode tai kaksi yksittäistä sänkyä",
        },
        {
          title: "Lisävuode",
        },
      ],
      images: images.isanta,
    },
    {
      id: 6,
      title: "Oleskelutila Labra",
      breakpoints: { md: 7 },
      htmlClass: "light-on-red",
      body:
        "Yläkerran päätyhuone Labra on vieraidemme käytössä.<br /><br />Labrassa on iso pöytä ruokailua tai työskentelyä varten.<br /><br />Lisäksi Labran löytyy astioita ja keittiön tasolta nautittavaksi kahvia ja teetä.",
      equipments: [
        {
          title: "Televisio",
        },
        {
          title: "Jääkaappi",
        },
        {
          title: "Mikroaaltouuni",
        },
        {
          title: "Kahvinkeitin",
        },
        {
          title: "Vedenkeitin",
        },
      ],
      images: images.labra,
    },
  ],
  additional: [
    {
      id: 0,
      htmlClass: "yellow-on-dark",
      title: "Lisätie&shy;dot ja varauk&shy;set",
      breakpoints: { md: 5 },
      // prettier-disable-next-line
      body: [
        "Huoneet ovat valmiina tulopäivänä klo 15 alkaen ja ne tulee luovuttaa läh&shy;tö&shy;päi&shy;vä&shy;nä klo 11 mennessä. Voit tehdä suoraan varauksen <router-link class='additional color-green animate' to='/booking'>täältä <v-icon size='20px'>{{ '$vuetify.icons.booking' }}</v-icon></router-link>. Voit myös tiedustella varauksia esimerkiksi pidemmälle ajanjaksolle tai muuten erityistoiveilla kir&shy;joit&shy;ta&shy;mal&shy;la sähköpos&shy;tia o&shy;soit&shy;tee&shy;seen <router-link to='/mail' class='additional color-green animate'>villa(ät)sibbe.fi <v-icon>{{ emailIcon }}</v-icon></router-link>.",
      ],
    },
  ],
  additionalImages: additionalImages,
};
export { accommodation, accommodationImages };
