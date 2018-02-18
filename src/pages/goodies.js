import React from 'react';

export default ({ data }) => {
	console.log(data);
	return (
		<div>
			<h1>
				Goodies, Weekly
			</h1>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
						{node.frontmatter.title}{" "}
					<p>{node.excerpt}</p>
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
					id
					frontmatter {
						title
					}
				}
			}
		}
	}
`;