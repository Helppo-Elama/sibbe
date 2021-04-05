import debounce from "lodash.debounce";

interface IWindow extends Window {
	debounce?: typeof debounce;
}

const w: IWindow = window;
w.debounce = debounce;

import Vue from "vue";

import "./registerServiceWorker";
import router from "./router";
//import store from "./store";
import vuetify from "./vuetify/vuetify";

import { FontAwesomeIcon, FontAwesomeLayers } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);

import AOS from "aos";

import App from "./App.vue";

Vue.config.productionTip = false;

import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

new Vue({
	router,
	//store,
	vuetify,
	render: (h) => h(App),
	mounted: () => {
		document.dispatchEvent(new Event("x-app-rendered"));
		AOS.init({
			delay: 0,
			duration: 400,
			easing: "ease-in-out",
		});
	},
}).$mount("#app");
