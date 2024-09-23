import InputLabel from '../components/InputLabel/InputLabel';

export default {
	title: 'InputLabel',
	component: InputLabel,
	tags: ['autodocs'],
	//👇 Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
};

const temptate = args => <InputLabel {...args} />;

export const InputLabell = temptate.bind({});

InputLabell.args = {
	size: 36,
	labelText: 'Username',
	htmlFor: 'username-input',
	infoIcon: true,
	required: true,
	labelTooltip: 'tooltip text',
};
