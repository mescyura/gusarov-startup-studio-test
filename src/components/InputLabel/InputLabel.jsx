import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip/Tooltip';

import './InputLabel.css';

function InputLabel({
	size = 36,
	labelText = 'Label',
	htmlFor,
	infoIcon = null,
	required = false,
	labelTooltip = 'Tooltip',
}) {
	return (
		<div className='label'>
			<label
				className='label-text'
				style={{ fontSize: size <= 36 ? '0.75rem' : '0.875rem' }}
				htmlFor={htmlFor}
			>
				{labelText}
				{required ? ` (Required)` : ` (Optional)`}
			</label>
			{infoIcon && (
				<div className='label-icon'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
					>
						<g clipPath='url(#clip0_29120_1190)'>
							<path
								d='M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z'
								stroke='#A0A0AB'
								strokeWidth='1.3'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
					</svg>
					{infoIcon && <Tooltip text={labelTooltip} />}
				</div>
			)}
		</div>
	);
}

InputLabel.propTypes = {
	size: PropTypes.oneOf([24, 32, 36, 40, 44, 48]),
	labelText: PropTypes.string,
	htmlFor: PropTypes.string,
	infoIcon: PropTypes.bool,
	required: PropTypes.bool,
	labelTooltip: PropTypes.string,
};

export default InputLabel;
