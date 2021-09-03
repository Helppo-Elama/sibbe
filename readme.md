## <https://sibbe.fi>

# TO DO

## Villa Sibbe

- [ ] Find a correct way to organize interfaces, classes and types
- [x] Basic frontend
- [x] Automatic carousels
- [x] Axios Sibbe Service
- [x] Fix styles (carousel, calendar)

### Front page

### Restaurant & Cafe

- [x] Menu
- [x] Restaurant page
- [x] Replace Google opening hours.

### Festivity

- [ ] Like conference page
- [ ] Examples of party packages

## Booking

- [x] Call, reserve and ask
- [x] Own booking page

## Cafe

- [ ] Events
- [x] Menu
- [x] Restaurant page
- [x] Replace Google opening hours

&nbsp;

---

&nbsp;

## Service

### Backend

- [ ] Error handling!
- [x] Lunch menus calendar
- [x] A'la Carte
- [ ] Other fields for frontend axios
- [ ] Image uploader with srcset support and auto resize
- [ ] Integrate Opening hours to Facebook

### Proxy

- [ ] Proxy Siteminder booking data with CRON -> store to database for fetching

### User control

- [ ] Enable
- [ ] No registration - only management can create users

### Api

- [x] Fetch API for frontend (axios)
- [x] Configure cross-origins properly

---

## Tower Media

Jos jokin asia mietityttää niin kysykää aiheesta lisää.

### Tästä projektista puuttuu dokumentointi täysin, mutta ymmärrän sen tärkeyden ja osaan myös käytännössä dokumentoida koodia (docblock), joka on erittäin tärkeää kun tehdään ryhmässä töitä. Pahoittelut että tästä paketista ne puuttuvat.

### Frontend

- Frontend puolella on käytössä Vue2 + Vuetify
- Optiomoitu pre-render tekniikalla
- Paketti on SPA vaikka osoitteet päättyvät .html -muotoon. Tämä oli ainoa tapa saada sosiaalisen median metatiedot eri sivuille (https://metatags.io/)
- 100% PWA
- Kuvat ovat nyt valitettavasti suoraan frontend paketissa ja optiomoidaan build -vaiheessa. Tarkoitus on viedä kuvat backend puolelle siten että laravelilta saadaan suoraan srcset sopivat kuvat frontend puolelle.

### Backend

- Backend puolella ei ole mitään JS/CSS optimointeja tällä hetkellä.
- Backend puolelta puuttuu täysin virheiden hallinta. Se ei valitettavasti ole ollut prioriteettilistalla.
- Tietokantaa päivitetään aivan liian huolettomasti.
- Tietokannassa käsitellään tietoja mahdollisimman paljon vapaassa JSON -muodossa (tyyliin MongoDB).
- SQL taitoja pitää ehdottomasti terästää.
- Huomasin tässä taannoin sellaisen pienen virheen että koko frontend pitäisi viedä Laravelin puolelle jolloin tietojen haku nopeutuisi todella paljon. Ei tarvitsisi enää käyttää axiosta erikseen.
