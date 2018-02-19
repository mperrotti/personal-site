import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import resetStyles from '../styles/global/reset/index.module.css';
import stanleyFont from '../../static/assets/stanley.css';

class TemplateWrapper extends React.Component {
	componentDidMount() {
		ReactGA.initialize('UA-114413191-1')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}

	render() {
		const {children} = this.props;
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
	}
};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
