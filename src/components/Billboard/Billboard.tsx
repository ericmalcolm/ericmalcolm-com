import React from 'react';
import './Billboard.scss';

export const Billboard = (): JSX.Element => {
	return (
		<section className="billboard">
			<section className="billboard-header">
				<div className="billboard-header__content">
					<img
						src="https://via.placeholder.com/50"
						alt=""
						role="presentation"
					/>
					<h1>Eric Malcolm</h1>
					<section>links</section>
				</div>
				<div className="billboard-header__image billboard-header__image--mobile">
					<img
						src="https://via.placeholder.com/370x470"
						alt="Eric Malcolm Profile"
					/>
				</div>
				<div className="billboard-header__image billboard-header__image--tablet">
					<img
						src="https://via.placeholder.com/670x470"
						alt="Eric Malcolm Profile"
					/>
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
				<a
					href="https://www.linkedin.com/in/ericmalcolm/"
					aria-label="View Eric Malcolm's LinkedIn Profile"
				>
					LinkedIn
				</a>
			</section>
		</section>
	);
};

export default Billboard;
