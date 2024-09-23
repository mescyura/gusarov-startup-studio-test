import PropTypes from 'prop-types';

import InputLabel from '../InputLabel/InputLabel';
import InputText from '../InputText/InputText';
import InputAnnotation from '../InputAnnotation/InputAnnotation';

import './InputGroup.css';

function InputGroup({
	size = 36,
	labelText,
	id,
	placeholder,
	helpText,
	infoIcon,
	required,
	fill,
	quiet,
	align,
	iconBefore,
	iconAfter,
	labelTooltip,
	inputTooltip,
	badgeText,
	disabled,
	value,
	error,
	onChange,
}) {
	return (
		<div className='input-group' style={{ gap: size <= 36 ? '4px' : '6px' }}>
			<InputLabel
				size={size}
				labelText={labelText}
				htmlFor={id}
				infoIcon={infoIcon}
				required={required}
				labelTooltip={labelTooltip}
			/>
			<InputText
				size={size}
				id={id}
				required={required}
				placeholder={placeholder}
				fill={fill}
				quiet={quiet}
				align={align}
				iconBefore={iconBefore}
				iconAfter={iconAfter}
				inputTooltip={inputTooltip}
				badgeText={badgeText}
				disabled={disabled}
				value={value}
				error={error}
				onChange={onChange}
			/>
			<InputAnnotation size={size} helpText={helpText} error={error} />
		</div>
	);
}

InputGroup.propTypes = {
	size: PropTypes.oneOf([24, 32, 36, 40, 44, 48]),
	labelText: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	helpText: PropTypes.string,
	infoIcon: PropTypes.bool,
	required: PropTypes.bool,
	fill: PropTypes.bool,
	quiet: PropTypes.bool,
	align: PropTypes.oneOf(['left', 'right']),
	iconBefore: PropTypes.bool,
	iconAfter: PropTypes.bool,
	labelTooltip: PropTypes.string,
	inputTooltip: PropTypes.string,
	badgeText: PropTypes.string,
	disabled: PropTypes.bool,
	value: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func,
};

export default InputGroup;
