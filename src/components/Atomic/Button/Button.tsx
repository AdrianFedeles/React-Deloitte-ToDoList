import React from 'react';
import './Button.scss';
import Icon from '../Icon/Icon';
import { IButtonProps } from './Button.interface';

const Button = (props: IButtonProps) => {
	const { isDisabled, iconSource, iconAlt, callbackFunction, addedStyle, actionType } = props;
	const handleButtonClick = () => {
		// console.log(props, 'props handleButtonClick Button');
		callbackFunction(actionType);
	};

	return (
		<div>
			<button onClick={handleButtonClick} disabled={isDisabled} style={addedStyle}>
				<Icon source={iconSource} alt={iconAlt} />
			</button>
		</div>
	);
};

export default Button;
