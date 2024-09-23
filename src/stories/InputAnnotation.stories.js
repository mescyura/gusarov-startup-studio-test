import InputAnnotation from '../components/InputAnnotation/InputAnnotation';

export default {
	title: 'InputAnnotation',
	component: InputAnnotation,
	tags: ['autodocs'],
	//👇 Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
};

const temptate = args => <InputAnnotation {...args} />;

export const InputAnnotationn = temptate.bind({});

InputAnnotationn.args = {
	size: 36,
	helpText: 'Please enter your username.',
	error: '',
};
