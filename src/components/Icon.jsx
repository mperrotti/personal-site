import PropTypes from 'prop-types';
import React from 'react';
import { iconShapes, validShapesList } from '../utils/iconShapes';

const Icon = (props) => {
	const {
		className,
		shape,
		title,
		color,
		style,
		height,
		width,
		...other
	} = props;

	const allStyles = style || {};
	if (color) {
		allStyles.fill = color;
	}

	return (
		<span className={className}>
			<svg
				preserveAspectRatio='xMinYMin meet'
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				role='img'
				style={allStyles}
				{...other}
			>
				{title && <title>{title}</title>}
				{iconShapes[shape]}
			</svg>
		</span>
	);
}

Icon.defaultProps = {
	color: '#000',
	height: '24',
	width: '24'
};

Icon.propTypes = {
	shape: PropTypes.oneOf(validShapesList).isRequired,
	title: PropTypes.string,
	color: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string
};

export default Icon;
