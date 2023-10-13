import React from 'react';
import { IconProps } from './Icon.interface';

const Icon = ({ source, alt }: IconProps) => {
	return <img src={source} alt={alt} />;
};

export default Icon;
