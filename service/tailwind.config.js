const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const path = require("path")

module.exports = {
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// Change with you want it
				"litepie-primary": colors.sky, // color system for light mode
				"litepie-secondary": colors.coolGray // color system for dark mode
			},
			fontFamily: {
				sans: ["Nunito", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	variants: {
		extend: {
			cursor: ["disabled"],
			textOpacity: ["disabled"],
			textColor: ["disabled"],
			opacity: ["disabled"]
		},
		purge: [
			path.resolve(__dirname, "./node_modules/litepie-datepicker/**/*.js"),
			"./vendor/laravel/jetstream/**/*.blade.php",
			"./storage/framework/views/*.php",
			"./resources/views/**/*.blade.php",
			"./resources/js/**/*.vue"
		]
	},

	// eslint-disable-next-line import/no-extraneous-dependencies, global-require
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
}
