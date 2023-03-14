module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', 'prettier', 'eslint-plugin-only-warn'],
	rules: {
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'array-bracket-spacing': 'error',
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': 'error',
		camelcase: 'error',
		'comma-dangle': ['error', 'never'],
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
		'no-debugger': 'error',
		'no-duplicate-case': 'error',
		'object-curly-spacing': ['error', 'always'],
		'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
		'prefer-const': 'error',
		semi: ['error', 'always'],
		'comma-spacing': ['error', { before: false, after: true }],
		'react/no-unescaped-entities': 0,
		'prettier/prettier': [
			'error',
			{
				printWidth: 120,
				tabWidth: 2,
				useTabs: false,
				semi: true,
				singleQuote: true,
				trailingComma: 'none',
				bracketSpacing: true,
				arrowParens: 'always'
			}
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: false,
				allowTemplateLiterals: true
			}
		]
	}
};
