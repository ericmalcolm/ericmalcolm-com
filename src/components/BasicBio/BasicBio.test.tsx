import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

import BasicBio from './BasicBio';
import basicBioData from './../../content/basicBioData.json';

test('BasicBio renders name', () => {
	render(<BasicBio {...basicBioData} />);
	const name = screen.getByText(/Eric Malcolm/i);
	expect(name).toBeInTheDocument();
});

test('BasicBio renders main description', () => {
	render(<BasicBio {...basicBioData} />);
	const mainDescription = screen.getByText(
		'Front-End Developer / Architect specializing in UX and Accessibility, based in Michigan.'
	);
	expect(mainDescription).toBeInTheDocument();
});

test('BasicBio renders secondary description', () => {
	render(<BasicBio {...basicBioData} />);
	const secondaryDescription = screen.getByText(
		'I help architect and develop solutions to create usable, human-friendly and accessible websites, interfaces, and apps.'
	);
	expect(secondaryDescription).toBeInTheDocument();
});

test('BasicBio renders LinkedIn link', () => {
	render(<BasicBio {...basicBioData} />);
	const linkElement = screen.getByText(/LinkedIn/i);
	expect(linkElement).toBeInTheDocument();
});

test('BasicBio renders with no accessibility violations', async () => {
	expect.extend(toHaveNoViolations)
  const { container } = render(<BasicBio {...basicBioData} />)
  const results = await axe(container)
  
  expect(results).toHaveNoViolations()
})