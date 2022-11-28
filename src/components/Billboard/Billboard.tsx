import React from 'react';
import './Billboard.scss';

import EricMalcolmBackground from './../../assets/eric-malcolm_billboard.jpg';
import EricMalcolm480 from './../../assets/eric-malcolm_billboard_480x610.jpg';
import EricMalcolm670 from './../../assets/eric-malcolm_billboard_670x470.jpg';
import MLogo from './../../assets/eric-malcolm_m-logo.png';

// TODO: Tests.

export const Billboard = (): JSX.Element => {
	return (
		<section
			className="billboard"
			style={{
				// TODO: manage this with state and hooks to handleResize window.innerWidth > 767
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
				backgroundImage: `url(${EricMalcolmBackground as string})`,
			}}
		>
			<section className="billboard-header">
				<div className="billboard-header__content">
					<img src={MLogo} alt="" role="presentation" />
					<h1>Eric Malcolm</h1>
				</div>
				<div className="billboard-header__image billboard-header__image--mobile">
					<img src={EricMalcolm480} alt="Eric Malcolm Profile" />
				</div>
				<div className="billboard-header__image billboard-header__image--tablet">
					<img src={EricMalcolm670} alt="Eric Malcolm Profile" />
				</div>
			</section>
			<section className="billboard-description">
				<h2>
					Front-End Developer / Architect specializing in UX and Accessibility,
					based in Michigan
				</h2>
				<p>
					I help architect and develop solutions to create usable,
					human-friendly and accessible websites, interfaces, and apps.
				</p>
				<p>
					<a
						href="https://www.linkedin.com/in/ericmalcolm/"
						aria-label="View Eric Malcolm's LinkedIn Profile"
					>
						LinkedIn
					</a>{' '}
					<a
						href="/Eric-Malcolm_Resume.pdf"
						aria-label="View Eric Malcolm's Resume in PDF Form"
					>
						Resume (PDF)
					</a>
					<a
						href="https://github.com/ericmalcolm"
						aria-label="View Eric Malcolm's GitHub Repos"
					>
						GitHub
					</a>
				</p>
			</section>
		</section>
	);
};

export default Billboard;
