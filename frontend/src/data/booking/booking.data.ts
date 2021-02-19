import {
  bookingImages,
  bookingCarouselImages as images,
} from "./booking.images";
import {
  IBookingData,
  IBookingApiUrl,
  IBookingUrl,
} from "../interfaces/booking.interface";
import { IRooms } from "../interfaces/rooms.interface";

const urlStatic: Record<string, Array<string>> = {
  siteminder: ["https://service.sibbe.fi/proxy.php?start_date=", "&end_date="],
  //&locale=fi&currency=EUR&items[0][adults]=2&items[0][children]=0&items[0][infants]=0
  directbook: [
    "https://direct-book.com/properties/alarautaoydirect?checkInDate=",
    "&checkOutDate=",
    "&locale=fi",
    "currency=EUR&",
  ],
};

export const createApiURL = (o: IBookingApiUrl) => {
  const url =
    urlStatic.siteminder[0] + o.start + urlStatic.siteminder[1] + o.end;
  return url;
};
export const createBookingURL = (o: IBookingUrl) => {
  const url =
    urlStatic.directbook[0] +
    o.start +
    urlStatic.directbook[1] +
    o.end +
    urlStatic.directbook[2] +
    urlStatic.directbook[3];
  return url;
};
const bookingData = (): IBookingData => {
  const now = new Date();
  now.correctOffset(now.getTimezoneOffset());
  const request = {
    start: now.toISOString().split("T")[0],
    end: now.addDays(28).toISOString().split("T")[0],
  };
  const end = now.addDays(28);
  const dateRange = { start: now, end: end };
  return {
    request: {
      url: createApiURL(request),
    },
    dateRange,
  };
};

//Artturi, lilja/rico, olavi/kaarlo, isäntä
const bookingRooms: IRooms = {
  rooms: [
    {
      id: 0,
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
      breakpoints: { md: 6 },
      title: "Lilja ja Rico",
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
      images: images.liljaRico,
    },
    {
      id: 2,
      title: "Olavi ja Kaarlo",
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
      images: images.olaviKaarlo,
    },
    {
      id: 5,
      title: "Isäntä",
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
  ],
};

export { bookingData, bookingImages, bookingRooms };
