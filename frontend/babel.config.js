const plugins = [];
if (process.env.NODE_ENV === "production" && process.env.REMOVECONSOLE) {
	plugins.push(["transform-remove-console", { exclude: ["error", "warn", "info"] }]);
	console.log("\n ☠ Console removed.");
}

module.exports = {
	presets: ["@vue/cli-plugin-babel/preset"],
	plugins,
	parserOptions: {
		requireConfigFile: false,
	},
};
