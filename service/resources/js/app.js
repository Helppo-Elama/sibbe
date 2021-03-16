require("./bootstrap");

// Import modules...
import Vue from "vue";
import {
    App as InertiaApp,
    plugin as InertiaPlugin,
} from "@inertiajs/inertia-vue";
Vue.use(InertiaPlugin);

import PortalVue from "portal-vue";
Vue.use(PortalVue);

import VCalendar from "v-calendar";
Vue.use(VCalendar, {});

Vue.mixin({ methods: { route } });

const app = document.getElementById("app");

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
