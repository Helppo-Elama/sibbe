import { VuetifyThemeVariant } from "vuetify/types/services/theme.d"

const $color1 = "#424242" // RGB 66 66 66
const $color2 = "#cb2631" // RGB 203 38 49
const $color3 = "#86ba90" // RGB 134 186 144
const $color4 = "#f5f3bb" // RGB 245 243 187
const $color5 = "#eaeaea" // RGB 234 234 234

const light: VuetifyThemeVariant = {
	primary: $color1,
	secondary: $color3,
	error: $color2,
	success: $color3,
	accent: $color1,
	info: $color4,
	warning: $color2,
	thertiary: $color5
}

export default light
