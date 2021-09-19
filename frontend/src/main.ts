import "./registerServiceWorker"

import { FontAwesomeIcon, FontAwesomeLayers } from "@fortawesome/vue-fontawesome"
import AOS from "aos"
import debounce from "lodash.debounce"
import Vue from "vue"
import Vuelidate from "vuelidate"

import App from "./App.vue"
import router from "./router"
// import store from "./store";
import vuetify from "./vuetify/vuetify"

interface IWindow extends Window {
	debounce?: typeof debounce
}

const w: IWindow = window
w.debounce = debounce

Vue.component("FontAwesomeIcon", FontAwesomeIcon)
Vue.component("FontAwesomeLayers", FontAwesomeLayers)

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Vuelidate)

Vue.prototype.$googleMapsLoaded = false

new Vue({
	router,
	// store,
	vuetify,
	render: (h) => h(App),
	mounted: () => {
		document.dispatchEvent(new Event("x-app-rendered"))
		AOS.init({
			delay: 0,
			duration: 400,
			easing: "ease-in-out"
		})
	}
}).$mount("#app")
