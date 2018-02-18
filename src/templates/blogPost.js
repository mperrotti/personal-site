import React from 'react';

export default ({ data }) => {
	const postContent = data.markdownRemark;

	return (
		<div dangerouslySetInnerHTML={{ __html: postContent.html }} />
	);
}

export const query = graphql`
	query blogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;
