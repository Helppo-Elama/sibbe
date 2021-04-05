import { VuetifyThemeVariant } from "vuetify/types/services/theme";

const $color1 = "#424242", //RGB 66 66 66
	$color2 = "#cb2631", //RGB 203 38 49
	$color3 = "#86ba90", //RGB 134 186 144
	$color4 = "#f5f3bb", //RGB 245 243 187
	$color5 = "#eaeaea"; //RGB 234 234 234

export const light: VuetifyThemeVariant = {
	primary: $color1,
	secondary: $color3,
	error: $color2,
	success: $color3,
	accent: $color1,
	info: $color4,
	warning: $color2,
	thertiary: $color5,
};
