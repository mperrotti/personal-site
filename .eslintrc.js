const config = {
	root: true,
	parser: 'babel-eslint',
	extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true
		},
		sourceType: 'module'
	},
	env: {
		browser: true,
		node: true,
		jest: true,
		jasmine: true,
		es6: true
	},
	plugins: ['flowtype', 'react', 'meetup'],
	rules: {
		'no-tabs': 0,
		'react/forbid-prop-types': 0,
		'react/require-default-props': 0,
		'react/prop-types': 0,
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'test/**', // tape, common npm pattern
					'tests/**', // also common npm pattern
					'spec/**', // mocha, rspec-like pattern
					'**/__tests__/**', // jest pattern
					'test.{js,jsx}', // repos with a single test file
					'test-*.{js,jsx}', // repos with multiple top-level test files
					'**/*.{test,spec}.{js,jsx}', // tests where the extension denotes that it is a test
					'**/jest.config.js', // jest config
					'**/webpack.config.js', // webpack config
					'**/webpack.config.*.js', // webpack config
					'**/rollup.config.js', // rollup config
					'**/rollup.config.*.js', // rollup config
					'**/gulpfile.js', // gulp config
					'**/gulpfile.*.js', // gulp config
					'**/Gruntfile{,.js}', // grunt config
					'**/protractor.conf.js', // protractor config
					'**/protractor.conf.*.js', // protractor config
					'.storybook/**', // storybook
					'stories/**' // storybook
				],
				optionalDependencies: false
			}
		],
		// SDS will be addressing the a11y rules
		'jsx-a11y/interactive-supports-focus': 0,
		'jsx-a11y/media-has-caption': 0,
		'jsx-a11y/no-redundant-roles': 0,
		'jsx-a11y/iframe-has-title': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/label-has-for': 0,
		'jsx-a11y/alt-text': 0,
		'jsx-a11y/anchor-is-valid': 0
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: 'webpack.resolve.js'
			},
		},
	}
};

module.exports = config;
