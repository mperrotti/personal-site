import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import resetStyles from '../styles/global/reset/reset.module.css';

const TemplateWrapper = ({ children }) => {
	return(
		<div>
			<Helmet
				title="Gatsby Default Starter"
				meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
				]}
			/>
			<div>
				{children()}
			</div>
		</div>
	)
};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
