/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@chromatic-com/storybook',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	staticDirs: ['../public', '../src'],
};

export default config;
