import {
  conferenceRoomsCarouselImages as images,
  conferenceAdditionalImages as additionalImages,
} from "./conference.images";
import { IRooms } from "../interfaces/rooms.interface";

const conference: IRooms = {
  rooms: [
    {
      id: 0,
      htmlClass: "yellow-on-dark",
      breakpoints: { md: 6 },
      title: "Nobel sali",
      body:
        "Alakerran Nobel -sali aina 20 hengen kokouksiin asti, huokuu A.I. Virtasen ajan henkeä. Istu saman autenttisen pöydän ääressä jossa A.I.V. vietti Nobel -illallista ja kehitä teidän yrityksenne seuraava maailmaa mullistava idea.",
      equipments: [
        {
          title: "WIFI",
        },
        {
          title: "46″ TV",
        },
        {
          title: "2 erillistä massiivipuupöytää, noin 10 hlöä/pöytä.",
        },
      ],
      images: images.nobel,
    },
    {
      id: 1,
      htmlClass: "green-on-light",
      breakpoints: { md: 6 },
      title: "Labra",
      body:
        "Pienempi kokoustila ”Labra” Villan yläkerrassa. Muutaman hengen kokouksiin tai isomman porukan ryhmätyötilaksi.",
      equipments: [
        {
          title: "WIFI",
        },
        {
          title: "46″ TV",
        },
      ],
      images: images.labra,
    },
  ],
  additional: [
    {
      id: 0,
      htmlClass: "light-on-green",
      title: "Kokous&shy;pa&shy;ke&shy;tit",
      breakpoints: { md: 12 },
      // prettier-disable-next-line
      body: [""],
    },
  ],
  additionalImages: additionalImages,
};
export { conference };
