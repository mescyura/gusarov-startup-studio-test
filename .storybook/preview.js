/** @type { import('@storybook/react').Preview } */
import '../src/index.css';
import '../src/App.css';
import '../src/components/InputGroup/InputGroup.css';
import '../src/components/InputLabel/InputLabel.css';
import '../src/components/InputText/InputText.css';

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	tags: ['autodocs'],
};

export default preview;
