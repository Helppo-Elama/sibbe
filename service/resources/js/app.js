// Import modules...
import Vue from "vue"

// import "virtual:windi.css"

import { App as InertiaApp, plugin as InertiaPlugin } from "@inertiajs/inertia-vue"

import VueGlobalMessage from "vue-global-message"

import PortalVue from "portal-vue"

import CKEditor from "ckeditor4-vue"

import VCalendar from "v-calendar"

require("./bootstrap")

Vue.use(InertiaPlugin)

Vue.use(VueGlobalMessage, {
	zindex: 1000,
	duration: 1500
})

Vue.use(PortalVue)

Vue.use(VCalendar, {})

Vue.use(CKEditor)

// eslint-disable-next-line no-undef
Vue.mixin({ methods: { route } })

const app = document.getElementById("app")

new Vue({
	render: (h) =>
		h(InertiaApp, {
			props: {
				initialPage: JSON.parse(app.dataset.page),
				// eslint-disable-next-line import/no-dynamic-require, global-require
				resolveComponent: (name) => require(`./Pages/${name}`).default
			}
		})
}).$mount(app)
