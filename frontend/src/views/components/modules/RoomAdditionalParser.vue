<template>
  <v-container>
    <v-row v-if="dataType === 'accommodation'" :class="additional.htmlClass">
      <v-col cols="12" xs="12" sm="6" md="12" class="vertical-middle">
        <p>
          Huoneet ovat valmiina tulopäivänä klo 15 alkaen ja ne tulee luovuttaa
          läh&shy;tö&shy;päi&shy;vä&shy;nä klo 11 mennessä. Voit tehdä suoraan
          varauksen
          <router-link class="additional color-green animate" to="/siteminder">
            <v-icon size="20px">{{ "$vuetify.icons.siteminder" }}</v-icon>
            täältä</router-link
          >.
          <br />
          <br />
          Voit myös tiedustella varauksia esimerkiksi pidemmälle ajanjaksolle
          tai muuten erityistoiveilla kir&shy;joit&shy;ta&shy;mal&shy;la
          sähköpos&shy;tia o&shy;soit&shy;tee&shy;seen
          <router-link to="/mail" class="additional color-green animate"
            >villa(ät)sibbe.fi <v-icon>{{ emailIcon }}</v-icon></router-link
          >.
        </p>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="12">
        <div style="position: relative">
          <picture>
            <source v-bind:srcSet="images[0].webp.srcSet" type="image/webp" />
            <img
              :src="images[0].img.src"
              v-bind:srcSet="images[0].img.srcSet"
              v-bind:width="images[0].img.width"
              v-bind:height="images[0].img.height"
              v-bind:alt="images[0].alt"
              loading="lazy"
            />
          </picture>
          <div class="color-light source-kivaa-tekemista-fi">
            &copy;
            <a href="https://kivaatekemistä.fi" rel="noopener noreferrer"
              >KivaaTekemistä.fi</a
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row
      v-else-if="dataType === 'conference'"
      :class="additional.htmlClass"
      class="vertical-middle"
    >
      <v-col cols="12">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="5">
              <ul class="museo">
                <u>Koko päivän paketti</u>
                <li>8h kokouspaketti 6-16 hengelle</li>
                <li>Arkisin klo 8-16 tai 9-17</li>
              </ul>
              <p>
                Paketti sisältää tervetulokahvin suolaisella kahvileivällä,
                kotiruokalounaan ja iltapäiväkahvin makean kahvileivän kera
              </p>
            </v-col>
            <v-col cols="12" sm="7">
              <ul class="museo">
                <u> Puolipäiväpaketti </u>
                <li>4h kokous 6-16 hengelle</li>
                <li>Arkisin klo 8-12 tai klo 12-16</li>
              </ul>
              <p>
                Paketti sisältää tervetulokahvin suolaisella kahvileivällä tai
                iltapäiväkahvin makean kahvileivän kera sekä kotiruokalounaan
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <ul class="museo">
                <u> Iltapaketti </u>
                <li>4h kokous 6-16 hengelle</li>
                <li>Arkisin klo 17-21</li>
              </ul>
              <p>
                Paketti sisältää tervetulokahvin ja suolaisen tai makean
                kahvileivän
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <ul class="museo">
                <u> Koko päivän paketti </u>
                <li>8h kokouspaketti 6-16 hengelle</li>
                <li>Arkisin klo 8-16 tai 9-17</li>
              </ul>
              <p>
                Paketti sisältää tervetulokahvin suolaisella kahvileivällä,
                kotiruokalounaan ja iltapäiväkahvin makean kahvileivän kera
              </p>
            </v-col>
            <v-col cols="12">
              <h4 class="display-1 museo">Tilavuokrat sopimuksen mukaan</h4>
              <p>
                Lisätiedot ja tarjouspyynnöt sähköpostitse
                <router-link
                  to="/salesmail"
                  class="additional color-light animate"
                  >myynti(ät)sibbe.fi
                  <v-icon>{{ emailIcon }}</v-icon></router-link
                >
              </p>
            </v-col>
            <v-col cols="12" md="4" class="vertical-middle">
              <div style="position: relative">
                <picture>
                  <source
                    v-bind:srcSet="images[0].webp.srcSet"
                    type="image/webp"
                  />
                  <img
                    :src="images[0].img.src"
                    v-bind:srcSet="images[0].img.srcSet"
                    v-bind:width="images[0].img.width"
                    v-bind:height="images[0].img.height"
                    v-bind:alt="images[0].alt"
                    loading="lazy"
                  />
                </picture>
                <div class="color-light source-kivaa-tekemista-fi">
                  &copy;
                  <a href="https://kivaatekemistä.fi" rel="noopener noreferrer"
                    >KivaaTekemistä.fi</a
                  >
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="8" class="pt-16">
              <h4 class="display-1 museo pb-5">Sijainti</h4>
              <p class="pb-16">
                Vaikka Sibbe sijaitsee vain 25 minuutin ajomatkan päässä
                Helsingin keskustasta, 20 minuuttia lentokentältä, olemme silti
                luonnon äärellä rauhallisessa maisemassa puhtaassa
                luonnonilmassa.
                <br />
                <br />
                Kokousten lomassa on kaikki Villa Sibben palvelut lähelläsi,
                virkistäydy välillä täysimittaisella frisbeegolfradallamme, käy
                uimajärvessä uimassa tai vaikka moottorikelkkasafarilla.
                <br />
                <br />
                Yhteistyökumppaneidemme kanssa järjestämme juuri teidän ryhmälle
                sopivan ohjelman ja aktiviteetit.
              </p>
              <h4 class="display-1 museo pb-5">
                Ohjel&shy;ma&shy;pal&shy;ve&shy;lut ja
                ak&shy;ti&shy;vi&shy;tee&shy;tit
              </h4>
              <p>
                Monipuolisen yhteistyöverkostomme avulla takaamme että
                ryhmällesi löytyy monipuolista ohjelmaa ja aktiviteettia kauden
                mukaan.
                <br />
                <br />
                Frisbeegolfia 20 -väyläisellä kilpatason radalla.
                Leikkimieliseen tai vakavaankin kilvoitteluun soveltuu mainiosti
                frisbeegolfin pelaaminen.
              </p>
              <p>
                Muita Sibben aktiviteetteja ovat mm: Beach Lentis, SUP-lautailu,
                melonta ja hiljentymistä varten Levon polku.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" xs="12" sm="6" md="12" class="vertical-middle">
        <p>!DataType</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { IRoomAdditionalData } from "@d/interfaces/rooms.interface";
import { IImage } from "@d/interfaces/images.interface";
import { mdiEmailOutline } from "@mdi/js";

const accommodationParser = Vue.extend({
  name: "RoomAdditionalParser",
  props: {
    additional: { type: Object as () => PropType<IRoomAdditionalData> },
    images: { type: Array as () => PropType<IImage> },
    dataType: { type: String },
  },
  data(): {
    emailIcon: string;
  } {
    return {
      emailIcon: mdiEmailOutline,
    };
  },
  mounted(): void {
    console.log("👓 Accommodationparser mounted.");
  },
});
export default accommodationParser;
</script>
<style lang="scss" scoped>
ul {
  padding-left: 0;
}
.source-kivaa-tekemista-fi {
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
}
a {
  font-weight: bold;
  white-space: nowrap;
}
@media #{map-get($display-breakpoints, 'sm-only')} {
  .source-kivaa-tekemista-fi {
    font-size: 2.2vw;
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .source-kivaa-tekemista-fi {
    font-size: 2.7vw;
  }
}
</style>
