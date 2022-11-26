import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

import App from './App';

test('App renders name', () => {
	render(<App />);
	const name = screen.getByText(/Eric Malcolm/i);
	expect(name).toBeInTheDocument();
});

test('App renders main description', () => {
	render(<App />);
	const mainDescription = screen.getByText(
		'Front-End Developer / Architect specializing in UX and Accessibility, based in Michigan.'
	);
	expect(mainDescription).toBeInTheDocument();
});

test('App renders secondary description', () => {
	render(<App />);
	const secondaryDescription = screen.getByText(
		'I help architect and develop solutions to create usable, human-friendly and accessible websites, interfaces, and apps.'
	);
	expect(secondaryDescription).toBeInTheDocument();
});

test('App renders LinkedIn link', () => {
	render(<App />);
	const linkElement = screen.getByText(/LinkedIn/i);
	expect(linkElement).toBeInTheDocument();
});

test('App renders with no accessibility violations', async () => {
	expect.extend(toHaveNoViolations)
  const { container } = render(<App/>)
  const results = await axe(container)
  
  expect(results).toHaveNoViolations()
})