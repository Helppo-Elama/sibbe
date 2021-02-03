import Vue from "vue";
//import Vuetify from "vuetify";
import Vuetify from "vuetify/lib";
import BookingIcon from "@m/NavBookingIcon.vue";

Vue.use(Vuetify);

const colors = {
  $color1: "#424242", //RGB 66 66 66
  $color2: "#cb2631", //RGB 203 38 49
  $color3: "#86ba90", //RGB 134 186 144
  $color4: "#f5f3bb", //RGB 245 243 187
  $color5: "#eaeaea", //RGB 234 234 234
};

const vuetify = new Vuetify({
  themes: {
    light: {
      primary: colors.$color3,
      secondary: colors.$color1,
      error: colors.$color2,
      success: colors.$color3,
    },
  },
  icons: {
    values: {
      booking: {
        component: BookingIcon,
      },
    },
  },
});
export default vuetify;
