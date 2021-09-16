/* eslint-disable global-require */
const mix = require("laravel-mix")
const path = require("path")

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js").vue().webpackConfig(require("./webpack.config"))

// DEV
if (!mix.inProduction()) {
	mix
		.browserSync({
			proxy: "https://service.sibbe.test",
			https: {
				key: path.resolve(__dirname, "ssl/cert.key"),
				cert: path.resolve(__dirname, "ssl/cert.crt")
			},
			open: false
		})
		.sourceMaps()
		.postCss("resources/css/app.css", "public/css", [
			require("postcss-import"),
			require("tailwindcss")
		])
}

// PROD
if (mix.inProduction()) {
	mix
		.postCss("resources/css/app.css", "public/css", [
			require("postcss-import"),
			require("tailwindcss"),
			require("autoprefixer")
		])
		.version()
}
if (process.env.npm_lifecycle_event === "hot") {
	mix.webpackConfig({
		devServer: {
			contentBase: path.resolve(__dirname, "public")
		}
	})
}
