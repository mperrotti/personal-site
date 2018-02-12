import React from 'react';
import Link from 'gatsby-link';

import Icon from '../components/Icon';

import portrait from '../../static/assets/portrait.png';

import activeProjects from '../utils/activeProjects';
import socialMediaData from '../utils/socialMediaData';

import homeStyles from '../styles/pages/home/home.module.css';
import modifierStyles from '../styles/global/modifiers/index.module.css';
import layoutStyles from '../styles/global/layout/index.module.css';
import typeStyles from '../styles/global/typography/index.module.css';

import boundsStyles from '../styles/global/layout/bounds.module.css';

const styles = Object.assign({},
	homeStyles,
	layoutStyles,
	typeStyles,
	modifierStyles,
);

console.log('boundsStyles');
console.log(boundsStyles);

console.log('homeStyles');
console.log(homeStyles);

console.log('styles');
console.log(styles);

const IndexPage = () => {
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
							width="70"
							height="70"
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
								<li>Living in Brooklyn</li>
								<li>Working at Meetup</li>
								<li>Not looking for new side projects</li>
							</ul>
						</aside>
					<div className={`
						${styles['runningText']}
						${styles['currently-body']}
						${styles['siteGrid-mainArea']}
					`}>
						<p className={`
							${styles['runningText']}
							${styles['paddingBottom']}
						`}>
							I’m working on tools for designers and tools for engineers to help us ship new things better and faster than we ever have before. So far, a lot of this work has been driven by the design system I established and maintain with Adam Detrick.
						</p>
					</div>
					<div className={styles['siteGrid-mainArea']}>
						<h4 className={styles['text--subtleHeader']}>Active projects</h4>
						<ul>
							{
								activeProjects.map((project, i) => {
									const isLast = i === (activeProjects.length - 1);

									return(
										<li className={!isLast && styles['paddingBottom--double']}>
											<h5 className={`
												${styles['text--accentFace']}
											`}>
												<a href={project.url} className={styles['text--accentLink']}>
													{project.name}
												</a>
											</h5>
											<p className={styles['runningText']}>{project.description}</p>
										</li>
									);
								})
							}
						</ul>
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
								This is a static Github page made with <a href="#" className={styles['text--accentLink']}>Gatsby</a>.
								The typefaces are <a href="#" className={styles['text--accentLink']}>Headline</a> and <a href="#" className={styles['text--accentLink']}>Body</a>.
								The portrait is taken from a doodle <a href="#" className={styles['text--accentLink']}>Kristen Stewart</a> (no, not that one) did during a meeting.
								For more details, check out the source code on <a href="#" className={styles['text--accentLink']}>Github</a>.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

export default IndexPage;
