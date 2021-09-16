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

mix
	.js("resources/js/app.js", "public/js")
	.vue()
	.webpackConfig({
		resolve: {
			alias: {
				"@": path.resolve("resources/js")
			}
		}
		/*
			module: {
				rules: [
					{
						test: /\.(postcss)$/,
						use: [
							"vue-style-loader",
							{ loader: "css-loader", options: { importLoaders: 1 } },
							"postcss-loader"
						]
					}
				]
			}
			*/
	})

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
		.postCss("resources/css/app.css", "public/css", [
			require("postcss-import"),
			require("tailwindcss")
		])
		.sourceMaps()
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
