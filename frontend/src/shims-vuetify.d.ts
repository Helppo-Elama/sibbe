import Vuetify, { Framework } from "vuetify"

declare module "vuetify/lib/framework" {
	export default Vuetify
}

declare module "vue/types/vue" {
	interface Vue {
		$vuetify: Framework
	}
}
