import React from 'react';
import Link from 'gatsby-link';

export default ({ data }) => {
	console.log(data);
	return (
		<div>
			<h1>
				Goodies, Weekly
			</h1>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
					<Link to={node.fields.slug}>{node.frontmatter.title}{" "} - <span>{node.frontmatter.date}</span></Link>
				</div>
			))}
		</div>
	);
};

export const query = graphql`
	query BlogIndexQuery {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;