/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 * @typedef { import("webpack-chain") ChainWebpack }
 */

const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const PrerenderSPAPlugin = require("prerender-spa-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const pwa = require("./pwa.config")
/**
 * @type { Options }
 */
if (process.env.NODE_ENV === "production") {
	// PRODUCTION
	module.exports = {
		pwa,
		productionSourceMap: false,

		configureWebpack: {
			mode: "production",
			optimization: {
				splitChunks: {
					chunks: "async",
					minSize: 20000,
					maxSize: 100000,
					minChunks: 1,
					maxAsyncRequests: 16,
					maxInitialRequests: 16,
					automaticNameDelimiter: "-",
					name: true,
					cacheGroups: {
						vendors: {
							test: /[\\/]node_modules[\\/]/,
							priority: -10
						},
						default: {
							minChunks: 2,
							priority: -20,
							reuseExistingChunk: false
						}
					}
				}
			},
			resolve: {
				extensions: ["*", ".js", ".jsx", ".ts", ".vue", ".tsx"],
				plugins: [new TsconfigPathsPlugin({})]
			},
			plugins: [
				new PrerenderSPAPlugin({
					staticDir: path.join(__dirname, "dist"),

					routes: [
						"/",
						"/accommodation.html",
						"/conference.html",
						"/booking.html",
						"/festivity.html",
						"/contact.html",
						"/cafe.html",
						"/recreation.html",
						"/restaurant.html"
					],

					// IMPORTANT HERE
					postProcess(renderedRoute) {
						renderedRoute.route = renderedRoute.originalRoute
						renderedRoute.html = renderedRoute.html.split(/>[\s]+</gim).join("><")
						if (renderedRoute.route.endsWith(".html")) {
							renderedRoute.outputPath = path.join(__dirname, "dist", renderedRoute.route)
						}
						return renderedRoute
					}
				})
			]
		},

		css: {
			loaderOptions: {
				scss: {
					additionalData: '@import "@s/main.scss";'
				}
			}
		},

		chainWebpack: (config) => {
			const imageRule = config.module.rule("images")
			imageRule.uses.clear()
			imageRule
				.use("responsive-loader")
				.loader("responsive-loader")
				.options({
					// eslint-disable-next-line global-require
					adapter: require("responsive-loader/sharp"),
					outputPath: "img/responsive/",
					name: "[name]-[width].[hash:8].[ext]",
					quality: 70
				})
				.end()
			const fontRule = config.module.rule("fonts")
			fontRule
				.test(/\.(ttf|otf|eot|woff|woff2)$/)
				.use("file-loader")
				.loader("file-loader")
				.tap((options) => {
					options = {
						name: "/assets/fonts/[name].[ext]"
					}
					return options
				})
				.end()
			const forkTsChecker = config.plugin("fork-ts-checker")
			forkTsChecker
				.tap((args) => {
					const allowUseMem = 8192
					args[0].memoryLimit = allowUseMem
					return args
				})
				.end()

			if (process.env.ANALYZE) {
				const bundleAnalyzerPlugin = config.plugin("bundle-analyzer")
				bundleAnalyzerPlugin.use(BundleAnalyzerPlugin).end()
			}
		},
		pluginOptions: {
			// HAS TO BE HERE
			prerenderSpa: {}
		}
	}
} else {
	// DEVELOPMENT
	module.exports = {
		configureWebpack: {
			mode: "development",
			resolve: {
				extensions: ["*", ".js", ".jsx", ".ts", ".vue", ".tsx"],
				plugins: [new TsconfigPathsPlugin({})]
			}
		},
		devServer: {
			host: "localhost"
		},
		css: {
			loaderOptions: {
				scss: {
					additionalData: '@import "@s/main.scss";',
					sassOptions: {
						quietDeps: true
					}
				}
			}
		},

		chainWebpack: (config) => {
			const imageRule = config.module.rule("images")
			imageRule.uses.clear()
			imageRule
				.use("responsive-loader")
				.loader("responsive-loader")
				.options({
					// eslint-disable-next-line global-require
					adapter: require("responsive-loader/sharp"),
					outputPath: "img/responsive/",
					name: "[name]-[width].[hash].[ext]"
				})
				.end()
			const fontRule = config.module.rule("fonts")
			fontRule
				.test(/\.(ttf|otf|eot|woff|woff2)$/)
				.use("file-loader")
				.loader("file-loader")
				.tap((options) => {
					options = {
						name: "fonts/[name].[ext]"
					}
					return options
				})
				.end()
			const forkTsChecker = config.plugin("fork-ts-checker")
			forkTsChecker
				.tap((args) => {
					const allowUseMem = 8192
					args[0].memoryLimit = allowUseMem
					return args
				})
				.end()

			if (process.env.ANALYZE) {
				const bundleAnalyzerPlugin = config.plugin("bundle-analyzer")
				bundleAnalyzerPlugin.use(BundleAnalyzerPlugin).end()
			}
		},
		pluginOptions: {
			prerenderSpa: {
				onlyProduction: true
			}
		}
	}
}
