import React from 'react';
import PropTypes from 'prop-types';

import './InputAnnotation.css';

function InputAnnotation({ size = 36, helpText, error }) {
	return (
		<>
			{!error && (
				<small
					className='input-annotation'
					style={{ fontSize: size <= 36 ? '0.75rem' : '0.875rem' }}
				>
					{helpText}
				</small>
			)}
		</>
	);
}

InputAnnotation.propTypes = {
	size: PropTypes.oneOf([24, 32, 36, 40, 44, 48]),
	helpText: PropTypes.string,
	error: PropTypes.string,
};

export default InputAnnotation;
