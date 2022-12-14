import React from 'react';
import './BasicBio.scss';

interface BasicBioProps {
	name: string;
	mainDescription: string;
	subDescription: string;
}

export const BasicBio = ({
	name,
	mainDescription,
	subDescription,
  }: BasicBioProps):JSX.Element => {
	return (
		<section className="container">
			<h1>{name}</h1>
			<h2>
				{mainDescription}
			</h2>
			<p>
				{subDescription}
			</p>
			<a
				href="https://www.linkedin.com/in/ericmalcolm/"
				aria-label="View Eric Malcolm's LinkedIn Profile"
			>
				LinkedIn
			</a>
		</section>
	);
};

export default BasicBio;

