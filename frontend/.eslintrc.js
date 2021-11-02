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
	plugins: ["simple-import-sort"],
	parserOptions: {
		ecmaVersion: 2021
	},
	rules: {
		// "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-console": process.env.NODE_ENV === "production" ? "off" : "off",
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
		"no-bitwise": ["warn", { allow: ["~"] }],
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error"
		// camelcase: "off"
		// "import/no-duplicates": ["warn", { considerQueryString: true }]
	}
}
