import React from 'react';

import Icon from '../components/Icon';
import ProjectListing from '../components/ProjectListing';

import portrait from '../../static/assets/portrait.png';

import activeProjects from '../utils/activeProjects';
import pastProjects from '../utils/pastProjects';
import socialMediaData from '../utils/socialMediaData';

import currentlyStyles from '../styles/pages/home/currently.module.css';
import heroStyles from '../styles/pages/home/hero.module.css';
import metaInfoStyles from '../styles/pages/home/metaInfo.module.css';

import displayStyles from '../styles/global/modifiers/display.module.css';
import paddingStyles from '../styles/global/modifiers/padding.module.css';
import widthStyles from '../styles/global/modifiers/width.module.css';

import boundsStyles from '../styles/global/layout/bounds.module.css';
import listStyles from '../styles/global/layout/list.module.css';
import sectionStyles from '../styles/global/layout/section.module.css';
import siteGridStyles from '../styles/global/layout/siteGrid.module.css';

import typeCompositionStyles from '../styles/global/typography/composition.module.css';
import scaleStyles from '../styles/global/typography/scale.module.css';
import typeStyles from '../styles/global/typography/styles.module.css';

const styles = Object.assign({},
	// page-specific styles
	currentlyStyles,
	heroStyles,
	metaInfoStyles,

	// layout-specific styles
	boundsStyles,
	listStyles,
	sectionStyles,
	siteGridStyles,

	// type-specific styles
	typeCompositionStyles,
	scaleStyles,
	typeStyles,

	// modifier styles
	displayStyles,
	paddingStyles,
	widthStyles
);

const IndexPage = () => {
	const invertedLinkClassnames = `${styles['text--accentLink']} ${styles['text--accentLink--inverted']}`;
	return (
		<div>

			<header className={`
				${styles['hero']}
				${styles['section']}
			`}>
				<div className={`
					${styles['siteGrid']}
					${styles['siteGrid--columns']}
					${styles['siteGrid--rows']}
					${styles['bounds']}
					${styles['heroWrapper']}
				`}>
					<h2
						className={`
							${styles['text--hero']}
							${styles['text--accentFace']}
							${styles['hero-copy']}
							${styles['hero-copy--headlineStart']}
					`}>
						Oh, hi
					</h2>
					<h2
						className={`
							${styles['text--hero']}
							${styles['text--accentFace']}
							${styles['hero-copy']}
							${styles['hero-copy--headlineEnd']}
					`}>
						I'm Mike
					</h2>
					<p
						className={`
							${styles['hero-copy']}
							${styles['hero-copy--body']}
							${styles['runningText']}
					`}>
						<img
							alt="Drawing of Mike"
							className={`
								${styles['hero-portrait']}
								${styles['hero-portrait--inline']}
								${styles['display--inline']}
								${styles['atMedium_display--none']}
							`}
							src={portrait}
						/>
						You can call me a designer or you can call me a developer - just don't restrain me to either box. I'm most excited by collaborating with people and organizations doing work on social justice, healthcare, education, and the arts.
					</p>
					<img
						alt="Drawing of Mike"
						className={`
							${styles['hero-portrait']}
							${styles['display--none']}
							${styles['atMedium_display--inline']}
						`}
						src={portrait}
					/>
				</div>
			</header>
			<section className={styles['bounds']}>
				<div className={`
					${styles['siteGrid']}
					${styles['siteGrid--columns']}
					${styles['siteGrid--rows']}
					${styles['section']}
				`}>
						<h3 className={`
							${styles['text--big']}
							${styles['text--accentFace']}
							${styles['currently-headline']}
							${styles['siteGrid-asideArea']}
						`}>Currently</h3>
						<aside className={`
							${styles['siteGrid-asideArea']}
							${styles['currently-summary']}
						`}>
							<ul className={`
								${styles['atMedium_text--small']}
								${styles['list']}
								${styles['list--bordered']}
							`}>
								<li>👨‍💻 Working at Mesosphere</li>
								<li>🌆 Living in Brooklyn</li>
								<li>😅 Too busy for new side projects</li>
							</ul>
						</aside>
					<div className={`${styles['siteGrid-mainArea']} ${styles['paddingBottom--double']}`}>
						<h4 className={styles['text--subtleHeader']}>Active projects</h4>
						<ProjectListing projects={activeProjects} />
					</div>
					<div className={styles['siteGrid-mainArea']}>
						<h4 className={styles['text--subtleHeader']}>Past projects</h4>
						<ProjectListing projects={pastProjects} />
					</div>
				</div>
			</section>
			<section className={styles['metaInfo']}>
				<div className={styles['bounds']}>
					<div className={`
						${styles['siteGrid']}
						${styles['siteGrid--columns']}
						${styles['metaInfo-wrapper']}
					`}>
						<div className={`
							${styles['siteGrid-asideArea']}
							${styles['atMedium_text--small']}
							${styles['contact']}
						`}>
							<h2 className={`
								${styles['text--accentFace']}
							`}>
								Get in touch
							</h2>
							<p className={`
								${styles['siteGrid-mainArea']}
								${styles['paddingBottom']}
							`}>
								You can email me at <a href="mailto:mperrotti573@gmail.com" className={styles['text--accentLink']}>mperrotti573@gmail.com</a> or find me elsewhere:
							</p>
							<ul className={`
								${styles['list']}
							`}>
								{
									socialMediaData.map((network) => (
										<li>
											<a href={network.link} className={styles['contact-socialItem']}>
												<Icon
													shape={network.iconShape}
													title={network.name}
													className={styles['socialItem-icon']}
												/>
												<span>{network.name}</span>
											</a>
										</li>
									))
								}
							</ul>
						</div>
						<div className={`
							${styles['siteGrid-mainArea']}
							${styles['inverted']}
							${styles['aboutSite']}
							${styles['runningText']}
						`}>
							<h2 className={`
								${styles['text--accentFace']}
								${styles['paddingBottom--half']}
							`}>
								About this site
							</h2>
							<p>
								This is a static site generated with <a href="https://www.gatsbyjs.org/" className={invertedLinkClassnames}>Gatsby</a> and deployed with <a href="https://www.netlify.com/" className={invertedLinkClassnames}>Netlify</a>.
								The typefaces used are <a href="https://optimo.ch/typefaces_Stanley_all_FontInformation.html" className={invertedLinkClassnames}>Stanley</a> and <a href="https://fonts.google.com/specimen/Roboto" className={invertedLinkClassnames}>Roboto</a>.
								The portrait is taken from a doodle <a href="https://twitter.com/teeshirts" className={invertedLinkClassnames}>Kristen Stewart</a> (no, not that one) did during a meeting.
								For more details, check out the source code on <a href="https://github.com/mperrotti/personal-site" className={invertedLinkClassnames}>Github</a>.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

export default IndexPage;
