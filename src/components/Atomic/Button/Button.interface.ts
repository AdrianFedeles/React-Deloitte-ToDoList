import { type } from 'os';

export type IButtonProps = {
	callbackFunction: Function;
	isDisabled: boolean;
	iconSource: string;
	iconAlt: string;
	index: number;
	addedtyle?: IButtonStylesProps;
};

export type IButtonStylesProps = {
	height?: string;
	width?: string;
	color?: string;
	backgroundColor?: string;
	cursor?: string;
	border?: string;
	fontSize?: string;
	borderRadius?: string;
	padding?: string;
	margin?: string;
	fontWeight?: string;
	display?: string;
};
type ButtonData = {
	id: string;
	index: number;
	idDone: boolean;
	text: string;
};
