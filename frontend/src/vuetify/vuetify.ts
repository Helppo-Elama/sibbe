import Vue from "vue";
//import Vuetify from "vuetify";
import Vuetify from "vuetify/lib";
import { light } from "./theme";
import fi from "vuetify/src/locale/fi";
import siteminder from "@c/SiteminderIcon.vue";

Vue.use(Vuetify);

const vuetify = new Vuetify({
	theme: {
		default: "light",
		themes: { light },
	},
	lang: {
		locales: { fi },
		current: "fi",
	},
	icons: {
		values: {
			siteminder: {
				component: siteminder,
			},
		},
	},
});
export default vuetify;
