module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/essential", "plugin:prettier/recommended", "@vue/airbnb", "prettier"],
	parserOptions: {
		parser: "@babel/eslint-parser"
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"prettier/prettier": [
			"warn",
			{
				doubleQuote: true,
				semi: false,
				trailingComma: "none",
				includeExports: false
			}
		],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "off",
				vue: "off"
			}
		]
	},
	settings: {
		"import/resolver": {
			"eslint-import-resolver-custom-alias": {
				alias: {
					"@": "./resources/js"
				},
				extensions: [".js", ".vue"]
			},
			node: {
				extensions: [".js", ".vue"]
			}
		}
	}
}
