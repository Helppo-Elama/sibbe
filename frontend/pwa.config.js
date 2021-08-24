module.exports = {
	name: "Villa Sibbe",
	themeColor: "#fff",
	msTileColor: "#fff",
	assetsVersion: "",
	manifestPath: "manifest.json",
	workboxOptions: {
		skipWaiting: false,
		navigateFallback: "/index.html",
		exclude: ["robots.txt", ".htaccess"]
	},
	manifestCrossorigin: undefined,
	appleMobileWebAppCapable: "no",
	appleMobileWebAppStatusBarStyle: "default",
	appleMobileWebAppCache: "yes",
	iconPaths: {
		maskIcon: "img/icons/safari-pinned-tab.svg",
		msTileImage: "img/icons/msapplication-icon-144x144.png",
		favicon32: null,
		favicon16: null,
		appleTouchIcon: null
	},
	manifestOptions: {
		default_locale: process.env.LOCALE,
		author: process.env.AUTHOR,
		name: process.env.NAME,
		short_name: process.env.NAME,
		description: process.env.DESCRIPTION,
		themeColor: "#fff",
		start_url: "/",
		display: "standalone",
		background_color: "#000000",
		icons: [
			{
				src: "./img/icons/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any maskable"
			},
			{
				src: "./img/icons/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any maskable"
			}
		]
	}
}
