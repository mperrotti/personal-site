import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import resetStyles from '../styles/global/reset/index.module.css';

const TemplateWrapper = ({ children }) => {
	return(
		<div>
			<Helmet
				title="Mike Perrotti"
				meta={[{ name: 'description', content: 'Mike Perrotti\'s personal site' }]}
			>
				<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
			</Helmet>
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
