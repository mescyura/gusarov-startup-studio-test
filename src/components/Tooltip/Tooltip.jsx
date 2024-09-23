import React from 'react';
import PropTypes from 'prop-types';

import './Tooltip.css';

function Tooltip({ text }) {
	return <span className='tooltiptext'>{text}</span>;
}

Tooltip.propTypes = {
	text: PropTypes.string,
};

export default Tooltip;
