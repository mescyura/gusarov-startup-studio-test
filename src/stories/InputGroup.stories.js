import { fn } from '@storybook/test';
import InputGroup from '../components/InputGroup/InputGroup';

export const ActionsData = {
	onChange: fn(),
};

export default {
	title: 'InputGroup',
	component: InputGroup,
	tags: ['autodocs'],
	//👇 Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
	args: {
		...ActionsData,
	},
};

const template = args => <InputGroup {...args} />;

export const InputGroupp = template.bind({});

InputGroupp.args = {
	size: 36,
	labelText: 'Username',
	id: 'username-input',
	placeholder: 'Enter your username...',
	helpText: 'Please enter your username.',
	infoIcon: true,
	required: true,
	fill: true,
	quiet: false,
	align: 'left',
	iconBefore: true,
	iconAfter: true,
	labelTooltip: 'tooltip text',
	inputTooltip: 'tooltip tooltip',
	badgeText: '⌘K',
	disabled: false,
	value: '',
	error: '',
};
