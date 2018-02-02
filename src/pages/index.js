import React from 'react';
import Link from 'gatsby-link';

import portrait from '../../static/assets/portrait.png';
import activeProjects from '../utils/activeProjects';

import homeStyles from '../styles/pages/home/home.module.css';

import paddingStyles from '../styles/global/modifiers/padding.module.css';

import siteGridStyles from '../styles/global/layout/siteGrid.module.css';
import boundsStyles from '../styles/global/layout/bounds.module.css';
import chunkStyles from '../styles/global/layout/chunk.module.css';
import sectionStyles from '../styles/global/layout/section.module.css';

import typeScaleStyles from '../styles/global/typography/scale.module.css';
import typeStyles from '../styles/global/typography/styles.module.css';

const styles = Object.assign(
	{},
	// page-specific styles
	homeStyles,

	// layout styles
	siteGridStyles,
	boundsStyles,
	chunkStyles,
	sectionStyles,

	// type styles
	typeScaleStyles,
	typeStyles,

	// modifier styles
	paddingStyles,
);

const IndexPage = () => {
	return (
		<div>

			<header className={`
				${styles['hero']}
				${styles['section']}
			`}>
				<div className={`
					${styles['siteGrid']}
					${styles['bounds']}
				`}>
					<h2
						className={`
							${styles['text--hero']}
							${styles['text--accentFace']}
							${styles['hero-copy']}
							${styles['hero-copy--headlineStart']}
					`}>
						Hi, I'm
					</h2>
					<h2
						className={`
							${styles['text--hero']}
							${styles['text--accentFace']}
							${styles['hero-copy']}
							${styles['hero-copy--headlineEnd']}
					`}>
						Mike Perrotti
					</h2>
					<p
						className={`
							${styles['hero-copy']}
							${styles['hero-copy--body']}
					`}>
						You can call me a designer or you can call me a developer - just don't restrain me to either box. I'm most excited by collaborating with people and organizations doing work on social justice, healthcare, education, and the arts.
					</p>
					<img
						alt="Drawing of Mike"
						className={styles['hero-portrait']}
						src={portrait}
					/>
				</div>
			</header>
			<section className={styles['bounds']}>
				<div className={`
					${styles['siteGrid']}
					${styles['section']}
				`}>
					<hgroup className={styles['currently-headline']}>
						<h3 className={`
							${styles['text--big']}
							${styles['text--accentFace']}
						`}>Currently</h3>
						<h4>Working at Meetup, living in Brooklyn</h4>
					</hgroup>
					<div className={`
						runningText
						${styles['currently-body']}
					`}>
						<p>I’m working on tools for designers and tools for engineers to help us ship new things better and faster than we ever have before. So far, a lot of this work has been driven by the design system I established and maintain with Adam Detrick.</p>
					</div>
					<aside className={`
							${styles['currently-activeProjects']}
							${styles['padding--all']}
						`}
					>
						<h4>Active projects</h4>
						<ul>
							{
								activeProjects.map((project) =>
									<li><a href={project.url}>{project.name}</a></li>
								)
							}
						</ul>
					</aside>
				</div>
			</section>
			<div className={styles['bounds']}>
				<div className={`
					${styles['siteGrid']}
					${styles['section']}
				`}>
					<section className={styles['about']}>
						<p>About content</p>
					</section>
					<section className={styles['contact']}>
						<p>Contact content</p>
					</section>
				</div>
			</div>
		</div>
	)
};

export default IndexPage;
