import { fn } from '@storybook/test';
import InputText from '../components/InputText/InputText';

export const ActionsData = {
	onChange: fn(),
};

export default {
	title: 'InputText',
	component: InputText,
	tags: ['autodocs'],
	//👇 Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
	args: {
		...ActionsData,
	},
};

const temptate = args => <InputText {...args} />;

export const InputTextt = temptate.bind({});

InputTextt.args = {
	size: 36,
	id: 'username-input',
	required: true,
	placeholder: 'Enter your username...',
	fill: true,
	quiet: false,
	align: 'left',
	iconBefore: true,
	iconAfter: true,
	inputTooltip: 'tooltip tooltip',
	badgeText: '⌘K',
	disabled: false,
	value: '',
	error: '',
};
