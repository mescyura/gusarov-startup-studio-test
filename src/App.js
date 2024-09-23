import { useState } from 'react';
import InputGroup from './components/InputGroup/InputGroup';

import './App.css';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');

	const data = {
		size: 36,
		labelText: 'Username',
		id: 'username-input',
		placeholder: 'Enter...',
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
	};

	function handleError(value) {
		setError(value);
	}

	const validateInput = value => {
		if (!value) {
			handleError('Input cannot be empty');
		} else if (value.length < 3) {
			handleError('Input must be at least 3 characters long');
		} else {
			handleError('');
		}
	};

	const onChange = (value, touched) => {
		setInputValue(value);
		if (touched && data.required) {
			validateInput(value);
		}
	};

	return (
		<div className='App'>
			<InputGroup
				{...data}
				value={inputValue}
				onChange={onChange}
				error={error}
			/>
		</div>
	);
}

export default App;
