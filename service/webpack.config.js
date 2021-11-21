const path = require("path")

module.exports = {
	resolve: {
		alias: {
			"@assets": path.resolve("resources/assets"),
			"@": path.resolve("resources/js")
		}
	},
	devServer: {
		/*
		https: {
			key: "./ssl/cert.key",
			cert: "./ssl/cert.crt",
			requestCert: true
		}
		*/
	},
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
}
