import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip/Tooltip';

import './InputText.css';

function InputText({
	size = 36,
	id,
	required = false,
	placeholder = 'Input text..',
	fill = true,
	quiet = false,
	align = 'left',
	iconBefore = false,
	iconAfter = false,
	inputTooltip = 'tooltip',
	badgeText = null,
	disabled = false,
	value,
	error = '',
	onChange,
}) {
	const [touched, setTouched] = useState(false);
	const inputRef = useRef(null);

	function handleTouch() {
		setTouched(true);
	}

	const handleKeyDown = event => {
		if (
			(event.metaKey || event.ctrlKey) &&
			event.key === badgeText?.toLowerCase().slice(-1)
		) {
			event.preventDefault();
			inputRef.current.focus();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const handleBlur = () => {
		handleTouch(true);
		onChange(value, true);
	};

	function calculateSize(size) {
		// Horizontal padding
		let horizontalPadding = size >= 40 ? 16 : 12;

		// Vertical padding
		let verticalPadding;
		if (size <= 24) {
			verticalPadding = 2;
		} else if (size <= 32) {
			verticalPadding = 6;
		} else if (size <= 36) {
			verticalPadding = 8;
		} else if (size <= 40) {
			verticalPadding = 8;
		} else if (size <= 44) {
			verticalPadding = 10;
		} else if (size >= 48) {
			verticalPadding = 12;
		}

		// Convert to rem
		verticalPadding = verticalPadding / 16;
		horizontalPadding = horizontalPadding / 16;

		return `${verticalPadding}rem ${horizontalPadding}rem`;
	}

	const Inputstyle = {
		fontSize: size <= 36 ? '0.75rem' : '0.875rem',
		paddingLeft: iconBefore & (align === 'left') ? '8px' : '',
		textAlign: align === 'left' ? 'left' : 'right',
	};

	const InputWrapperStyle = {
		flexDirection: align === 'right' ? 'row-reverse' : '',
		padding: calculateSize(size),
	};

	return (
		<div
			className='input-container'
			style={{ gap: size <= 36 ? '4px' : '6px' }}
		>
			<div
				className={`input ${!quiet ? '' : 'input-no-border'} ${
					fill ? '' : 'input-transparent'
				}`}
				style={InputWrapperStyle}
			>
				{!disabled
					? iconBefore && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
							>
								<path
									d='M14 14L11.6667 11.6667M13.3333 7.66667C13.3333 10.7963 10.7963 13.3333 7.66667 13.3333C4.53705 13.3333 2 10.7963 2 7.66667C2 4.53705 4.53705 2 7.66667 2C10.7963 2 13.3333 4.53705 13.3333 7.66667Z'
									stroke={error && required ? '#D92D20' : `#A0A0AB`}
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
					  )
					: null}
				<input
					id={id}
					disabled={disabled}
					required={error && required}
					className='input-text'
					style={Inputstyle}
					type='text'
					value={value}
					placeholder={placeholder}
					onChange={e => onChange(e.target.value, touched)}
					onBlur={handleBlur}
					ref={inputRef}
				/>

				{!disabled
					? iconAfter && (
							<div className='input-label-icon'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
								>
									<g clipPath='url(#clip0_29120_1198)'>
										<path
											d='M6.05998 5.99998C6.21672 5.55442 6.52608 5.17872 6.93328 4.9394C7.34048 4.70009 7.81924 4.61261 8.28476 4.69245C8.75028 4.7723 9.17252 5.01433 9.4767 5.37567C9.78087 5.737 9.94735 6.19433 9.94665 6.66665C9.94665 7.99998 7.94665 8.66665 7.94665 8.66665M7.99998 11.3333H8.00665M14.6666 7.99998C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99998C1.33331 4.31808 4.31808 1.33331 7.99998 1.33331C11.6819 1.33331 14.6666 4.31808 14.6666 7.99998Z'
											stroke={error && required ? '#D92D20' : `#A0A0AB`}
											strokeWidth='1.3'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
								</svg>
								<Tooltip text={inputTooltip} />
							</div>
					  )
					: null}
				{!disabled
					? badgeText && <span className='badge-text'>{badgeText}</span>
					: null}
			</div>
			{error && touched && (
				<small
					className='input-error'
					style={{
						fontSize: size <= 36 ? '0.75rem' : '0.875rem',
					}}
				>
					{error}
				</small>
			)}
		</div>
	);
}

InputText.propTypes = {
	size: PropTypes.oneOf([24, 32, 36, 40, 44, 48]),
	id: PropTypes.string,
	required: PropTypes.bool,
	placeholder: PropTypes.string,
	fill: PropTypes.bool,
	quiet: PropTypes.bool,
	align: PropTypes.oneOf(['left', 'right']),
	iconBefore: PropTypes.bool,
	iconAfter: PropTypes.bool,
	inputTooltip: PropTypes.string,
	badgeText: PropTypes.string,
	disabled: PropTypes.bool,
	value: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func,
};

export default InputText;
