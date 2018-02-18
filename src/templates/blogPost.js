import React from 'react';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';

import Grid from '../components/Grid';

import blogPostStyles from '../styles/pages/blogPost/blogPost.module.css';

import boundsStyles from '../styles/global/layout/bounds.module.css';

const styles = Object.assign({},
	// page-specific styles
	blogPostStyles,

	// layout-specific styles
	boundsStyles,
);

class BlogPost extends React.Component {
	render() {
		const {data} = this.props;

		const postContent = data.markdownRemark;

		const parserOptions = {
			replace: (domNode) => {
				if (domNode.name === 'ul') {
					return (
						<Grid gridItems={domToReact(domNode.children)} />
					);
				}
			}
		};

		return (
			<div className={`
				${styles['bounds']}
				${styles['blogPost']}
			`}>
				<hgroup>
					<h1>{postContent.frontmatter.title}</h1>
					<h2>{postContent.frontmatter.date}</h2>
				</hgroup>
				{ Parser(postContent.html, parserOptions) }
			</div>
		);
	}
}

export const query = graphql`
	query blogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date(formatString: "DD MMMM, YYYY")
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

export default BlogPost;
