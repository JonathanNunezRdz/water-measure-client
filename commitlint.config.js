/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// add your own scope here if needed
		'scope-enum': [
			2,
			'always',
			[
				'components',
				'hooks',
				'layout',
				'pages',
				'redux',
				'styles',
				'utils',
				'types',
				'all',
			],
		],
		'scope-case': [2, 'always', 'kebab-case'],
	},
};

module.exports = CommitLintConfiguration;
