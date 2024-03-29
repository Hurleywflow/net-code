module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'next',
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:react/recommended',
		'plugin:tailwindcss/recommended'
		// '@nkzw',
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		},
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			parser: '@typescript-eslint/parser'
		}
	],
	ignorePatterns: ['postcss.config.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		// project: ['./tsconfig.json'],
		// extraFileExtensions: ['.json'],
		project: true,
		tsconfigRootDir: __dirname
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'tailwindcss/no-custom-classname': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/no-unused-expressions': 'warn',
		'@typescript-eslint/no-useless-constructor': 'warn',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/promise-function-async': 'warn',
		'react/no-unescaped-entities': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'react/prop-types': 'off'
	}
};
