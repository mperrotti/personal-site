const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Mike Perrotti',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'categories',
				path: path.resolve('./src/blog-content')
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [],
			},
		}
	],
};
