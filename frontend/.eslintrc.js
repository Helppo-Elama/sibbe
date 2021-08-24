module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/strongly-recommended",
		"plugin:prettier/recommended",
		"@vue/airbnb",
		"@vue/typescript/recommended",
		"prettier"
	],
	parserOptions: {
		ecmaVersion: 2021
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
		]
		// "import/no-duplicates": ["warn", { considerQueryString: true }]
	}
}
